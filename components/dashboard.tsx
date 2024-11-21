'use client';
import { useCallback } from 'react';
import { DragDropContext, DraggableLocation, DropResult, Droppable } from 'react-beautiful-dnd';
import Column from './column';
import { useBoard } from '@/app/hooks/board/useBoard';
import useWindowSize from '@/app/hooks/window/useWindowSize';

export default function Dashboard() {
  const { boardState, dispatch } = useBoard();
  const { isMobile } = useWindowSize();

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const source: DraggableLocation = result.source;
      const destination: DraggableLocation = result.destination;

      if (result.type === 'TASK') {
        dispatch({ type: 'MOVE_TASK', payload: { source, destination } });
      }
    },
    [dispatch],
  );
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId='dashboard'
        type='COLUMN'
        direction={isMobile ? 'vertical' : 'horizontal'}
      >
        {(provided) => (
          <ul
            className='grid gap-3 md:grid-cols-3'
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardState.ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                listTitle={key}
                listOfTasks={boardState.columns[key]}
              />
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
