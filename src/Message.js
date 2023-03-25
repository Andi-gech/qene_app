function Sendmessage({ left, message, date, right, sender }) {
  const dates = new Date(date);
  const timeString = dates.toLocaleTimeString();
  const shortTimeString = timeString.replace(/:\d+ /, " ");
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(40deg, ${left} 0%, ${right} 100%)`,
        borderRadius: 23,
        borderBottomLeftRadius: sender ? 0 : 23,
        borderBottomRightRadius: sender ? 23 : 0,
        marginLeft: 5,
      }}
      className="message"
    >
      <p id="messagefont">{message}</p>
      <p>{shortTimeString}</p>
    </div>
  );
}

export default Sendmessage;
