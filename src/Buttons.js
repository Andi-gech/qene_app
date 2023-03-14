function Buttons({ name, onChange }) {
  return (
    <div className="Buttons">
      <button onClick={onChange}>{name}</button>
    </div>
  );
}

export default Buttons;
