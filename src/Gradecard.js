import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { FaEye } from "react-icons/fa";
import erroricon from "./assets/s.jpg";
import Gradegenerator from "./Gradegenerator";
import useCoursehook from "./useCoursedata";
import useCourseOutlinehook from "./useCourseoutlineHook";
import useMycoursedata from "./usefetchmycoursehook";
import useGradedata from "./useGrade";
import useIndividualcoursehook from "./useIndividualcoursehook";
function Gradecard({ id }) {
  const [isopen, setopen] = useState(false);
  const handleclick = () => {
    setopen(!isopen);
  };

  const { data, isError, error, isLoading } = useIndividualcoursehook(id);

  const { data: courseoutline } = useCourseOutlinehook(id);
  const { data: grade } = useGradedata();
  if (data) {
    const filter = grade?.filter((c) => c.course == id);
    if (filter) {
      var c = 0;
      for (let index = 0; index < filter.length; index++) {
        c = c + filter[index].percent;
      }

      var c = c / courseoutline?.length;
    }

    return (
      <div className="Gradess">
        <div className="Gradecard">
          <div className="Gradecardimage">
            <img
              src={
                data.course_image.startsWith("http")
                  ? data.course_image
                  : `https://andigech.pythonanywhere.com/${data.course_image}`
              }
            />
          </div>
          <div className="Gradecardname">
            <h4>{data.Course_name}</h4>
            <p>grade result</p>
          </div>
          <div className="GradePercentage">
            <CircularProgressbar
              value={c || 0}
              text={`${c || 0}/100 `}
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
                  stroke: "black",
                  transition: "stroke-dashoffset 2.5s ease 0s",
                },
                text: {
                  fill: "#ddd",
                  fontWeight: "bold",
                  fontSize: 12,
                },
              }}
              strokeWidth={10}
            />
          </div>
          <div className="Gradeeyebutton" onClick={handleclick}>
            <p>SeeAll</p>
          </div>
        </div>
        {isopen && courseoutline && (
          <div className="courseoutlinegrade">
            <div className="Individualoutline">
              <p>Course name</p>
              <p>Evaluated Mark</p>
            </div>
            {courseoutline.map((course) => (
              <div className="Individualoutline">
                <div>{course.course_module_name}</div>
                <Gradegenerator id={course.id} grade={grade} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Gradecard;
