import { useState } from 'react';
import TaskContext from './taskContext';

const TaskState = (props) => {
  const [tasks, setTasks] = useState([]);

  const taskAdder = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const taskRemover = (task) => {};

  return (
    <TaskContext.Provider value={{ tasks, taskAdder, taskRemover }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
