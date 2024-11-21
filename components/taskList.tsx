import * as React from 'react';
import { Task } from '@/app/types/types';
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
} from 'react-beautiful-dnd';
import { Card, CardContent, CardHeader } from './ui/card';
import TaskItem from './taskItem';
import { Button } from './ui/button';
import { PlusIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import CreateTask from './createTask';

type TaskListProps = {
  listTitle?: string;
  listId?: string;
  listType?: string;
  listOfTasks: Task[];
  isDropDisabled?: boolean;
};

export default function TaskList({
  listTitle,
  listOfTasks,
  isDropDisabled,
  listId = 'LIST',
  listType,
}: TaskListProps) {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <Droppable droppableId={listId} type={listType} isDropDisabled={isDropDisabled}>
      {(dropProvided: DroppableProvided) => (
        <Card {...dropProvided.droppableProps}>
          <CardHeader className='flex h-20 flex-row justify-between text-xl font-bold'>
            {listTitle}
            {listTitle === 'Todo' && (
              <Button variant={'secondary'} size={'icon'} onClick={() => setShowForm(!showForm)}>
                <PlusIcon
                  className={cn(showForm ? 'rotate-90' : '', 'transition-all ease-in-out')}
                />
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {listTitle === 'Todo' && showForm && (
              <div className='mb-3'>
                <CreateTask setShowForm={setShowForm} />
              </div>
            )}
            <InnerList listOfTasks={listOfTasks} dropProvided={dropProvided} title={listTitle} />
          </CardContent>
        </Card>
      )}
    </Droppable>
  );
}

type InnerListProps = {
  dropProvided: DroppableProvided;
  listOfTasks: Task[];
  title?: string;
};

function InnerList({ listOfTasks, dropProvided }: InnerListProps) {
  return (
    <div ref={dropProvided.innerRef} className='grid grid-cols-1 gap-3'>
      {listOfTasks.map((task, index) => {
        return (
          <Draggable key={task.id} draggableId={task.id} index={index}>
            {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
              <TaskItem
                key={task.id}
                task={task}
                provided={dragProvided}
                isDragging={dragSnapshot.isDragging}
              />
            )}
          </Draggable>
        );
      })}
      {dropProvided.placeholder}
    </div>
  );
}
