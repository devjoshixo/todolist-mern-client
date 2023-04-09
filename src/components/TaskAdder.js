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
      const task = {
        title: taskInput,
        checked: false,
      };
      taskState.taskAdder(task);
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
