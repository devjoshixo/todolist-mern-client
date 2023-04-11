import { useContext } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import TaskItem from './TaskItem';
import classes from './TaskItems.module.css';

const TaskItems = () => {
  const taskState = useContext(TaskContext);

  return (
    <div className={classes.taskItems}>
      {taskState.tasks.map((task) => {
        return (
          <TaskItem
            taskTitle={task.title}
            checked={task.checked}
            key={task.title}
          />
        );
      })}
    </div>
  );
};

export default TaskItems;
