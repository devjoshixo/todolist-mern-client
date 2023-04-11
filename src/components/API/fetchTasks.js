const fetchTasks = async () => {
  //   const url = 'https://todolist-server-db22.onrender.com/tasks';
  const url = 'http://localhost:5000/tasks';

  const Savedtasks = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  return Savedtasks;
};

export default fetchTasks;
