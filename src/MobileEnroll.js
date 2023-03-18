import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { FaCheckCircle, FaCircleNotch } from "react-icons/fa";
import { useParams } from "react-router-dom";

import CourseProfile from "./CourseProfilemobile";
import Loadingcomponent from "./LoadingComponent";
import Mobilebutton from "./mobileButtogreen";
import useCourseOutlinehook from "./useCourseoutlineHook";
import useMycoursedata from "./usefetchmycoursehook";
import useIndividualcoursehook from "./useIndividualcoursehook";

function MobileEnroll() {
  const { id } = useParams();
  const authHeader = useAuthHeader();
  const { data: outline, isLoading: isLoad } = useCourseOutlinehook(id);

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
      <div className="MobileEnroll">
        <div className="CourseTitle">
          <h2>{course.Course_name}</h2>
        </div>
        <div className="details">
          <p>{course.description}</p>
        </div>
        <CourseProfile user={course.Teacher} />
        <div className="MobileCourseoutline">
          <p id="Coutlineeourse">CourseOutline</p>
          {outline.map((courseoutline) => (
            <div className="courseoutlinesnames">
              <FaCheckCircle id="circlenotch" />
              {courseoutline.course_module_name}
            </div>
          ))}
        </div>
        <div>
          {mycourse.some((item) => item.course === course.id) && (
            <Mobilebutton name={"Enrolled"} />
          )}
          {!mycourse.some((item) => item.course === course.id) && (
            <Mobilebutton onclick={enroll} name={"Enroll"} />
          )}
        </div>
      </div>
    );
  }
  if (isLoad || isLoading) {
    return (
      <div className="MobileCourseList">
        <Loadingcomponent />
      </div>
    );
  }
}
export default MobileEnroll;
