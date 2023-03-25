function Sendmessage({ name, message, date }) {
  const dates = new Date(date);
  const timeString = dates.toLocaleTimeString();
  const shortTimeString = timeString.replace(/:\d+ /, " ");
  return (
    <div style={{ backgroundColor: name }} className="message">
      <p id="messagefont">{message}</p>
      <p>{shortTimeString}</p>
    </div>
  );
}

export default Sendmessage;
