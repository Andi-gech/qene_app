import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import Loadingcomponent from "./LoadingComponent";
import useCompletemodule from "./useCompletedmodule";
import useCourseOutlinehook from "./useCourseoutlineHook";
import useIndividualcoursehook from "./useIndividualcoursehook";

function MobileProgrsscard({ course_id }) {
  const { data: course } = useIndividualcoursehook(course_id);
  const { data, isError, error, isFetching, refech, isLoading } =
    useCourseOutlinehook(course_id);

  const { data: completed } = useCompletemodule();
  if (course && data && completed) {
    var sum = 0;
    const filter = data?.map((course) => {
      if (completed?.some((item) => item.courseoutlinee === course.id)) {
        sum = sum + 1;
      }
    });
    const count = () => {
      if (sum == 0) {
        return 0;
      }
      return (sum / data?.length).toFixed(2) * 100;
    };
    return (
      <Link to={`/courses/${course.id}`}>
        <div className="Mobile-course-progress">
          <div className="circularProgress">
            <CircularProgressbar
              value={count()}
              text={`${count()} % `}
              circleRatio={
                0.7
              } /* Make the circle only 0.7 of the full diameter */
              styles={{
                trail: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                },
                path: {
                  strokeLinecap: "butt",
                  transform: "rotate(-126deg)",
                  transformOrigin: "center center",
                  stroke: "green",
                  transition: "stroke-dashoffset 2.5s ease 0s",
                },
                text: {
                  fill: "black",
                  fontWeight: "bold",
                },
              }}
              strokeWidth={10}
            />
          </div>
          <div className="MobileprogresscardcourseTitle">
            {course.Course_name}
          </div>
        </div>
      </Link>
    );
  }
  if (isLoading) {
    return (
      <div className="MobileLearnBoard">
        <Loadingcomponent />
      </div>
    );
  }
}

export default MobileProgrsscard;
