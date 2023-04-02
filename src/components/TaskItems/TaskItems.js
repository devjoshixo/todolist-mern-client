import { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import TaskItem from './TaskItem';

const TaskItems = () => {
  const taskState = useContext(TaskContext);

  return taskState.tasks.map((task) => {
    return <TaskItem taskValue={task} key={task} />;
  });
};

export default TaskItems;
