import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import useCompletemodule from "./useCompletedmodule";
import useCourseOutlinehook from "./useCourseoutlineHook";

import useIndividualcoursehook from "./useIndividualcoursehook";
function Smallprogressbar({ courseid }) {
  const { data: course } = useIndividualcoursehook(courseid);
  const { data, isError, error, isFetching, refech } =
    useCourseOutlinehook(courseid);

  const { data: completed } = useCompletemodule();
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
  console.log(count());
  if (course) {
    return (
      <Link to={`/courses/${course.id}`}>
        <div className="Smallprigressbarcard">
          <div className="Smallprogressbar-image">
            <img
              src={
                course.course_image.startsWith("http")
                  ? course.course_image
                  : `https://andigech.pythonanywhere.com/${course.course_image}`
              }
            />
          </div>
          <div className="Smallprogressbar-title">
            <h4>{course.Course_name}</h4>
            <p>..........</p>
          </div>
          <div className="Smallprogressbar">
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
                  stroke: "red",
                  transition: "stroke-dashoffset 2.5s ease 0s",
                },
                text: {
                  fill: "#080808",
                  fontWeight: "bold",
                },
              }}
              strokeWidth={10}
            />
          </div>
        </div>
      </Link>
    );
  }
}

export default Smallprogressbar;
