import classes from './App.module.css';
import TaskAdder from './components/TaskAdder';
import TaskItems from './components/TaskItems/TaskItems';
import Clock from './components/UI/Clock';
import GitRef from './components/UI/GitRef';

function App() {
  return (
    <div className={classes['App']}>
      <GitRef />
      <h1 className={classes['mainHeading']}>
        Just do it.<span className={classes['mainHeading123']}></span>
      </h1>
      {/* TaskAdding  */}
      <TaskAdder />

      {/* Time and Date */}
      <Clock />

      {/* Showing current tasks */}
      <TaskItems />
    </div>
  );
}

export default App;
