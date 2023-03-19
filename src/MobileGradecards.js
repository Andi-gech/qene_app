import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CirclesWithBar } from "react-loader-spinner";
import AmharicModeContext from "./Amharicversion";
import bannericon from "./assets/code.jpg";
import Gradegenerator from "./Gradegenerator";
import Loadingcomponent from "./LoadingComponent";
import useCourseOutlinehook from "./useCourseoutlineHook";
import useGradedata from "./useGrade";
import useIndividualcoursehook from "./useIndividualcoursehook";
function Mobilegradecards({ id, index }) {
  const [isopen, setopen] = useState(false);
  const { data, isError, error, isLoading } = useIndividualcoursehook(id);

  const { data: courseoutline, isLoading: Loading } = useCourseOutlinehook(id);
  const { data: grade, isLoading: Load } = useGradedata();
  const { isAmharicMode, toggleAmharicMode } = useContext(AmharicModeContext);

  if (data && courseoutline && grade) {
    return (
      <div className="MobileGradecardswithoutline">
        <div className="Mobilegradecards">
          <img
            src={
              data.course_image.startsWith("http")
                ? data.course_image
                : `https://andigech.pythonanywhere.com/${data.course_image}`
            }
          />
          <p>{data.Course_name}</p>

          {isopen && (
            <FaEye
              id="eyeicon"
              size={23}
              onClick={() => {
                setopen(!isopen);
              }}
            />
          )}
          {!isopen && (
            <FaEyeSlash
              id="eyeicon"
              size={23}
              onClick={() => {
                setopen(!isopen);
              }}
            />
          )}
        </div>
        {isopen && courseoutline && (
          <div className="outline-grade">
            <div className="Individualoutlineee">
              <p id="tablename">{isAmharicMode ? "የኮርሱ ስም" : "Course name"}</p>
              <p id="tablename">
                {isAmharicMode ? "ያስመዘገቡት ውጤት" : "Evaluated Mark"}
              </p>
            </div>
            {courseoutline.map((course) => (
              <div className="Individualoutlineee">
                <p>{course.course_module_name}</p>

                <Gradegenerator id={course.id} grade={grade} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  } else if ((isLoading || Loading || Load) && index == 0) {
    return <Loadingcomponent />;
  }
}
export default Mobilegradecards;
