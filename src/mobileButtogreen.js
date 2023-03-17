function Mobilebutton({ name, onclick }) {
  return (
    <div className="mobilebutton" onClick={onclick}>
      {name}
    </div>
  );
}

export default Mobilebutton;
