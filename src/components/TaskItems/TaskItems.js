import { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import TaskItem from './TaskItem';

const TaskItems = () => {
  const taskState = useContext(TaskContext);

  return taskState.tasks.map((task) => {
    return (
      <TaskItem
        taskTitle={task.title}
        checked={task.checked}
        key={task.title}
      />
    );
  });
};

export default TaskItems;
