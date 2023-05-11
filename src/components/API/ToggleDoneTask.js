const toggledonetask = async (id) => {
  // const url = 'https://todolist-server-db22.onrender.com/tasks';
  const url = 'http://localhost:5000/tasks';

  const Savedtasks = await fetch(url + '/toggle', {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify({ id: id }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
  return Savedtasks;
};

export default toggledonetask;
