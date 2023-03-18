import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";

import useCourseOutlinehook from "./useCourseoutlineHook";
import useMycoursedata from "./usefetchmycoursehook";
import useIndividualcoursehook from "./useIndividualcoursehook";

import { FaBook, FaCheckCircle, FaCheckDouble } from "react-icons/fa";
import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";

function Enrolling() {
  const { id } = useParams();
  const authHeader = useAuthHeader();

  const { data: course, isLoading } = useIndividualcoursehook(id);
  const {
    data,
    isError,
    error,
    isFetching,
    refech,
    isLoading: loadingoutline,
  } = useCourseOutlinehook(id);
  const { data: mycourse, refetch } = useMycoursedata();
  const enroll = () => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    // Make the request

    axios
      .post("https://andigech.pythonanywhere.com/mycourse/", {
        course: id,
      })
      .then((response) => {
        refetch();
        console.log(response.data);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  };
  if (course && data && mycourse) {
    return (
      <div className="HomeBody">
        <div className="HomebodyTitle">
          <h1>{course.Course_name}</h1>
        </div>
        <div className="EnrollCard">
          <div className="EnrollCard_image">
            <img
              src={
                course.course_image.startsWith("http")
                  ? course.course_image
                  : `https://andigech.pythonanywhere.com${course.course_image}`
              }
            />
          </div>
          <div className="Enrollcarddetail">
            <div className="EnrollTitles">
              <h1>{course.Course_name}</h1>
            </div>
            <p>{course.description}</p>
            {data.map((outline) => (
              <div className="Courseoutline">
                <FaBook size={18} color={"green"} />
                <p>{outline.course_module_name}</p>
              </div>
            ))}
            <div className="enrollbutton">
              {mycourse.some((item) => item.course === course.id) && (
                <button id="disabled" disabled>
                  Enrolled <FaCheckCircle color="green" />
                </button>
              )}
              {!mycourse.some((item) => item.course === course.id) && (
                <button onClick={enroll}>Enroll</button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <Errrorcomponent error={error} />;
  }
  if (isLoading || loadingoutline) {
    return <Loadingcomponent />;
  }
}

export default Enrolling;
