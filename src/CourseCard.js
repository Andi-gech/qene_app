import { FaCircle, FaPlayCircle } from "react-icons/fa";
import bannericon from "./assets/s.jpg";
import profileicon from "./assets/profile.jpg";
import { Link } from "react-router-dom";
import useProfilehook from "./useProfiledatahook";
function CourseCard({ name, coursepic, courseid, user }) {
  const { data, isError, error, isFetching, refech } = useProfilehook(user);
  if (data) {
    return (
      <Link to={`/courses/${courseid}/enroll`} className="cardlink">
        <div
          className="card-image"
          style={{
            backgroundImage: `url(${
              coursepic.startsWith("http")
                ? coursepic
                : `https://andigech.pythonanywhere.com${coursepic}`
            })`,
            backgroundSize: "cover",
            height: 200,
            width: 300,
          }}
        >
          <div className="Card-top">
            <h4>{name}</h4>
            <p>500min</p>
          </div>
          <div className="Card-bottom">
            <FaPlayCircle size={30} />
            <img
              src={
                data.profile_pic.startsWith("http")
                  ? data.profile_pic
                  : `https://andigech.pythonanywhere.com${data.profile_pic}`
              }
            />
          </div>
        </div>
      </Link>
    );
  }
}
export default CourseCard;
