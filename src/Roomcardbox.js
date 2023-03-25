import { Link, useParams } from "react-router-dom";
import bannericon from "./assets/s.jpg";
import useCoursehook from "./useCoursedata";
import useIndividualcoursehook from "./useIndividualcoursehook";
import useIndividualroomhook from "./useIndividualroom";
import useRoom from "./useRoom";
function RoomCardbox({ name }) {
  const { data, isError, error, isLoading, refech } = useIndividualcoursehook(
    name.course
  );

  if (data) {
    return (
      <Link to={`/discusse/${name.id}`}>
        {" "}
        <div className="Roomcardbox">
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
