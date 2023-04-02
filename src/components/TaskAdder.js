import classes from './TaskAdder.module.css';

const TaskAdder = () => {
  return (
    <section className={classes.taskadder}>
      <input
        type="text"
        placeholder="Add items..."
        className={classes.textbox}
      ></input>
      <button className={classes.action}>I Got This!</button>
    </section>
  );
};

export default TaskAdder;
