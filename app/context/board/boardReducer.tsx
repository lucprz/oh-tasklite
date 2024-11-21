import { Board, BoardAction } from '@/app/types/types';
import { boardInitialState } from './boardContext';

export function boardReducer(state: Board, action: BoardAction): Board {
  switch (action.type) {
    case 'ADD_TASK': {
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          ['Todo']: [action.payload, ...state.columns.Todo],
        },
      };

      localStorage.setItem('@Board', JSON.stringify(newState));

      return newState;
    }
    case 'MOVE_TASK': {
      if (action.payload.source.droppableId === action.payload.destination.droppableId) {
        const reorderedTasks = [...state.columns[action.payload.source.droppableId]];
        const [movedTask] = reorderedTasks.splice(action.payload.source.index, 1);
        reorderedTasks.splice(action.payload.destination.index, 0, movedTask);

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [action.payload.source.droppableId]: reorderedTasks,
          },
        };
        localStorage.setItem('@Board', JSON.stringify(newState));
        return newState;
      }

      const startTasks = [...state.columns[action.payload.source.droppableId]];
      const finishTasks = [...state.columns[action.payload.destination.droppableId]];
      const [removedTask] = startTasks.splice(action.payload.source.index, 1);
      finishTasks.splice(action.payload.destination.index, 0, removedTask);

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.source.droppableId]: startTasks,
          [action.payload.destination.droppableId]: finishTasks,
        },
      };

      localStorage.setItem('@Board', JSON.stringify(newState));

      return newState;
    }
    case 'SET_TASKS': {
      return action.payload;
    }
    case 'REMOVE_TASK': {
      const taskToRemoveId = action.payload.id;
      const newState = { ...state };

      for (const column of Object.keys(state.columns)) {
        newState.columns[column] = newState.columns[column].filter(
          (task) => task.id !== taskToRemoveId,
        );
      }
      localStorage.setItem('@Board', JSON.stringify(newState));

      return newState;
    }
    default: {
      return boardInitialState;
    }
  }
}
