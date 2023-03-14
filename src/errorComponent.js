import erroricon from "./assets/error.png";
function Errrorcomponent({ error }) {
  console.log("ddddddddd", error);
  return (
    <div className="IsError">
      <img src={erroricon} />
      <p> try again later!!</p>
    </div>
  );
}

export default Errrorcomponent;
