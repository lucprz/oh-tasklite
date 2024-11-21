import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Task } from '@/app/types/types';
import { DraggableProvided } from 'react-beautiful-dnd';
import { cn } from '@/lib/utils';
import { CalendarIcon, DotsHorizontalIcon, TrashIcon } from '@radix-ui/react-icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useBoard } from '@/app/hooks/board/useBoard';
import { Button } from './ui/button';

type TaskItemProps = {
  task: Task;
  isDragging: boolean;
  provided: DraggableProvided;
};

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('es-419', { dateStyle: 'long' }).format(new Date(dateString));
}

function TaskItem({ isDragging, provided, task }: TaskItemProps) {
  const { dispatch } = useBoard();

  return (
    <li
      className='relative'
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <Card className={cn(isDragging ? 'bg-slate-50' : '')}>
        <CardHeader className='pb-3'>
          <div className='flex justify-between'>
            <CardTitle>{task.task}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={'outline'}
                  size={'icon'}
                  className='absolute right-5 top-5 h-6 w-6'
                >
                  <DotsHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Button
                  variant='ghost'
                  className='w-full justify-between hover:bg-red-50 hover:text-red-500'
                  onClick={() => {
                    dispatch({ type: 'REMOVE_TASK', payload: { id: task.id } });
                  }}
                >
                  Eliminar <TrashIcon className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        {task.description && (
          <CardContent className='pb-3'>
            <CardDescription>{task.description}</CardDescription>
          </CardContent>
        )}
        <CardFooter className='flex justify-between'>
          <div className='flex h-6 items-center gap-2'>
            <CalendarIcon className='text-slate-500' />
            <CardDescription>{formatDate(task.date)}</CardDescription>
          </div>
          <CardDescription
            className={`${
              task.tag === 'High'
                ? 'bg-red-50 text-red-500'
                : task.tag === 'Medium'
                  ? 'bg-yellow-50 text-yellow-500'
                  : 'bg-green-50 text-green-500'
            } rounded px-2 py-1 text-xs`}
          >
            {task.tag}
          </CardDescription>
        </CardFooter>
      </Card>
    </li>
  );
}

export default React.memo<TaskItemProps>(TaskItem);
