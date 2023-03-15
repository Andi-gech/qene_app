import { FaCheckCircle, FaStar } from "react-icons/fa";
import bannericon from "./assets/s.jpg";
function Allcoursesdetailcard({ name, Profilepic }) {
  return (
    <div className="Allcoursesbigcard">
      <div className="coursepic">
        <img
          src={
            Profilepic.startsWith("http")
              ? Profilepic
              : `https://andigech.pythonanywhere.com${Profilepic}`
          }
        />
      </div>
      <div className="detailtext">
        <h3>{name}</h3>
        <div className="inline-text">
          <p>5 creadit hour</p>
          <FaCheckCircle color="green" />
        </div>
        <div className="inline-text">
          <p>Video tutor</p>
          <FaCheckCircle color="green" />
        </div>
        <div className="inline-text">
          <p>realtime Project</p>
          <FaCheckCircle color="green" />
        </div>
        <div className="inline-text">
          <p>Active discusion</p>
          <FaCheckCircle color="green" />
        </div>
        <div className="inline-text">
          <p>rating</p>
          <div>
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar color="orange" />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allcoursesdetailcard;
