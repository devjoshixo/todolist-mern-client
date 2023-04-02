import classes from './App.module.css';
import TaskAdder from './components/TaskAdder';

function App() {
  return (
    <div className={classes['App']}>
      <h1 className={classes['mainHeading']}>
        Just do it.<span className={classes['mainHeading123']}></span>
      </h1>

      {/* TaskAdding  */}
      <TaskAdder />
      {/* Showing current tasks */}
    </div>
  );
}

export default App;
