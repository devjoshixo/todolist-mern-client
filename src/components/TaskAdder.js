import { useContext, useState } from 'react';
import classes from './TaskAdder.module.css';
import TaskContext from '../context/tasks/taskContext';

const TaskAdder = () => {
  const [taskInput, setTaskInput] = useState('');

  const inputChangeHandler = (event) => {
    setTaskInput(event.target.value);
  };

  const taskState = useContext(TaskContext);

  const taskAddHandler = () => {
    if (taskInput.trim().length > 0) {
      taskState.taskAdder(taskInput);
      console.log(taskState.tasks);
      setTaskInput('');
    } else {
      console.log('not good');
    }
  };

  return (
    <section className={classes.taskadder}>
      <input
        type="text"
        placeholder="Add items..."
        value={taskInput}
        onChange={inputChangeHandler}
        className={classes.textbox}
      />
      <button className={classes.action} onClick={taskAddHandler}>
        I Got This!
      </button>
    </section>
  );
};

export default TaskAdder;
