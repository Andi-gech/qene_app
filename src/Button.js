import "./App.css";
function Button({ name, onclick }) {
  return (
    <div onClick={onclick} className="Button">
      {name}
    </div>
  );
}

export default Button;
