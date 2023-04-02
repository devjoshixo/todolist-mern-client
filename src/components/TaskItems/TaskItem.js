import classes from './TaskItem.module.css';

const TaskItem = (props) => {
  return <div className={classes.taskItem}>{props.taskValue}</div>;
};

export default TaskItem;
