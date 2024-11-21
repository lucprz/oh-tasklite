import { DraggableLocation } from 'react-beautiful-dnd';

type OnDragPayload = {
  source: DraggableLocation;
  destination: DraggableLocation;
};

type RemoveTaskPayload = {
  id: string;
};

export type Task = {
  id: string;
  task: string;
  description: string;
  tag: string;
  date: string;
};

export type TaskMap = {
  [key: string]: Task[];
};

export type Board = {
  columns: TaskMap;
  ordered: string[];
};

export type BoardAction =
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'SET_TASKS'; payload: Board }
  | { type: 'REMOVE_TASK'; payload: RemoveTaskPayload }
  | { type: 'MOVE_TASK'; payload: OnDragPayload };
