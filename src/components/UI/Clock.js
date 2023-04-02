import './Clock.css';

const Clock = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  const formattedToday = mm + '/' + dd + '/' + yyyy;

  const time = today.toLocaleTimeString();

  return (
    <div className="dateTime">
      {formattedToday} {time}
    </div>
  );
};

export default Clock;
