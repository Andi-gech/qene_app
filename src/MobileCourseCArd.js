import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bannericon from "./assets/code.jpg";
import Loadingcomponent from "./LoadingComponent";
import useProfilehook from "./useProfiledatahook";
function Mobilecourscard({ name, coursepic, courseid, user, index }) {
  const { data, isError, error, isLoading, refech } = useProfilehook(user);

  if (data) {
    return (
      <Link to={`/courses/${courseid}/enroll`} className="cardlink">
        <div
          className="MobileCourseCArds"
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
            <h4 id="mobilecardt">{name}</h4>
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
  } else if (isLoading && index == 0) {
    return <Loadingcomponent />;
  }
}
export default Mobilecourscard;
