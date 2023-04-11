import { useState } from 'react';
import classes from './TaskAdder.module.css';
import AddTask from './API/AddTask';

const TaskAdder = () => {
  const [taskInput, setTaskInput] = useState('');

  const inputChangeHandler = (event) => {
    setTaskInput(event.target.value);
  };

  const taskAddHandler = () => {
    if (taskInput.trim().length > 0) {
      const task = {
        title: taskInput,
        checked: false,
      };
      AddTask(task);
      setTaskInput('');
    } else {
      console.log('not good');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      taskAddHandler();
    }
  };

  return (
    <section className={classes.taskadder}>
      <input
        type="text"
        placeholder="Add items..."
        value={taskInput}
        onChange={inputChangeHandler}
        onKeyDown={handleKeyDown}
        className={classes.textbox}
      />
      <button className={classes.action} onClick={taskAddHandler}>
        I Got This!
      </button>
    </section>
  );
};

export default TaskAdder;
