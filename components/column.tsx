import { Task } from '@/app/types/types';
import TaskList from './taskList';

type ColumnProps = {
  listTitle: string;
  listOfTasks: Task[];
  index: number;
};

export default function Column({ listOfTasks, listTitle }: ColumnProps) {
  return (
    <div>
      <TaskList
        listId={listTitle}
        listType='TASK'
        listOfTasks={listOfTasks}
        isDropDisabled={false}
        listTitle={listTitle}
      />
    </div>
  );
}
