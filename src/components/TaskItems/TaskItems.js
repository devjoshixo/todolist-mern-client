import { useContext, useEffect } from 'react';
import TaskContext from '../../context/tasks/taskContext';
import TaskItem from './TaskItem';
import classes from './TaskItems.module.css';

const TaskItems = () => {
  const taskState = useContext(TaskContext);

  useEffect(() => {
    taskState.fetchTasks();
  }, [taskState]);

  return (
    <div className={classes.taskItems}>
      {taskState.tasks.map((task) => {
        return (
          <TaskItem
            taskTitle={task.title}
            checked={task.checked}
            key={task._id}
            id={task._id}
          />
        );
      })}
    </div>
  );
};

export default TaskItems;
