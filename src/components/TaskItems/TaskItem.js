import Card from '../UI/Card';
import DeleteTask from '../API/DeleteTask';
import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  const doneHandler = () => {
    console.log('done');
  };

  const deleteHandler = () => {
    DeleteTask(props.id);
  };

  return (
    <Card>
      <div className={`${classes.taskItem} ${props.checked ? 'checked' : ''}`}>
        <p>{props.taskTitle}</p>
        <div onClick={doneHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="#FFF"
            className={classes.checkmarkbg}
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
        </div>
        <div className={classes.deletebg} onClick={deleteHandler}>
          <svg
            width="50%"
            height="50%"
            fill="#000"
            transform="translate(0,10)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 500"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
