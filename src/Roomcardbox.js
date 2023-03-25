import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import bannericon from "./assets/s.jpg";
import DarkModeContext from "./DarkMODE";
import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";
import useCoursehook from "./useCoursedata";
import useIndividualcoursehook from "./useIndividualcoursehook";
import useIndividualroomhook from "./useIndividualroom";
import useRoom from "./useRoom";
function RoomCardbox({ name }) {
  const { data, isError, error, isLoading, refech } = useIndividualcoursehook(
    name.course
  );
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  if (data) {
    return (
      <Link to={`/discusse/${name.id}`}>
        {" "}
        <div
          className="Roomcardbox"
          style={{
            background: isDarkMode ? "black" : "white",
            color: isDarkMode ? "white" : "black",
            marginTop: 30,
            boxShadow: isDarkMode ? "1px 2px 9px #F4AAB9" : "1px 2px 9px black",
          }}
        >
          <img
            src={
              data.course_image.startsWith("http")
                ? data.course_image
                : `https://andigech.pythonanywhere.com${data.course_image}`
            }
          />
          <h3>{data.Course_name}</h3>
        </div>
      </Link>
    );
  }
}

export default RoomCardbox;
