import { useState } from 'react';
import TaskContext from './taskContext';

const TaskState = (props) => {
  const [tasks, setTasks] = useState([]);
  const url = 'https://todolist-server-db22.onrender.com/tasks';

  const fetchTasks = async () => {
    const Savedtasks = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
    setTasks(Savedtasks);
  };

  const taskAdder = async (task) => {
    await fetch(url + '/add', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  };

  const taskRemover = async (id) => {
    await fetch(url + '/delete', {
      method: 'DELETE',
      mode: 'cors',
      body: JSON.stringify({ id: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  };

  return (
    <TaskContext.Provider value={{ tasks, taskAdder, taskRemover, fetchTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
