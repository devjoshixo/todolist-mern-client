import { useState } from 'react';
import TaskContext from './taskContext';

const TaskState = (props) => {
  const [tasks, setTasks] = useState([{ title: 'Dev', checked: false }]);

  const taskAdder = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const taskRemover = (title) => {
    const newTasks = tasks.filter((task) => {
      if (task.title === title) {
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, taskAdder, taskRemover }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
