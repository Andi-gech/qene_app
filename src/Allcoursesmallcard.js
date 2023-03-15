import { Link } from "react-router-dom";
import bannericon from "./assets/s.jpg";
function Allcoursescard({ onmouseover, onmouseout, name, profilepic, id }) {
  return (
    <div
      className="Allcoursecards"
      onMouseOver={onmouseover}
      onMouseOut={onmouseout}
    >
      <div className="Allcoursecardimage">
        <img
          src={
            profilepic.startsWith("http")
              ? profilepic
              : `https://andigech.pythonanywhere.com/${profilepic}`
          }
        />
      </div>
      <div className="Allcoursecardtext">
        <h4>{name}</h4>
        <p>html is iddbfdfj.....</p>
      </div>

      <div className="Allcoursecardbutton">
        <Link to={`/courses/${id}/enroll`}>
          <p>Enroll</p>
        </Link>
      </div>
    </div>
  );
}

export default Allcoursescard;
