async function AddTask(task) {
  const url = 'https://todolist-server-db22.onrender.com/tasks';
  // const url = 'http://localhost:5000/tasks';

  await fetch(url + '/add', {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

export default AddTask;
