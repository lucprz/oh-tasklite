import { BoardContext } from '@/app/context/board/boardContext';
import * as React from 'react';

export function useBoard() {
  return React.useContext(BoardContext);
}
