const taskRemover = async (id) => {
  const url = 'https://todolist-server-db22.onrender.com/tasks';
  // const url = 'http://localhost:5000/tasks';

  await fetch(url + '/delete', {
    method: 'DELETE',
    mode: 'cors',
    body: JSON.stringify({ id: id }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
};

export default taskRemover;
