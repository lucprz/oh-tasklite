'use client';
import * as React from 'react';
import { initialState } from '@/app/constants/initialState';
import { Board, BoardAction } from '@/app/types/types';
import { boardReducer } from './boardReducer';

export const boardInitialState: Board = {
  columns: initialState,
  ordered: Object.keys(initialState),
};

export const BoardContext = React.createContext({
  boardState: boardInitialState,
  dispatch: (_action: BoardAction) => {},
});

export const BoardProvider = ({ children }: React.PropsWithChildren) => {
  const [boardState, dispatch] = React.useReducer(boardReducer, boardInitialState);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    const localBoardData = localStorage.getItem('@Board');

    if (localBoardData === null) {
      localStorage.setItem('@Board', JSON.stringify(boardInitialState));
    } else {
      const dataObject = JSON.parse(localBoardData);
      dispatch({ type: 'SET_TASKS', payload: dataObject });
    }
    setLoading(false);
  }

  if (loading) return;
  return <BoardContext.Provider value={{ boardState, dispatch }}>{children}</BoardContext.Provider>;
};
