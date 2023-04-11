import { useEffect, useState } from 'react';
import fetchTasks from '../API/fetchTasks';
import TaskItem from './TaskItem';
import classes from './TaskItems.module.css';
import Spinner from '../UI/Spinner';

const TaskItems = () => {
  const [tasks, setTasks] = useState([]);
  const [spinner, setSpinner] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSpinner(true);
    const text = async () => {
      setTasks(await fetchTasks());
    };
    text();
    setSpinner(false);
  }, [tasks]);

  return (
    <>
      {spinner ? <Spinner /> : ''}
      <div className={classes.taskItems}>
        {tasks.map((task) => {
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
    </>
  );
};

export default TaskItems;
