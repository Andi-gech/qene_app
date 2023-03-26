import { useContext } from "react";
import DarkModeContext from "./DarkMODE";
import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";
import Mobilegradecards from "./MobileGradecards";
import useMycoursedata from "./usefetchmycoursehook";

function MobilGradeReport() {
  const { isLoading, data, isError, error, isFetching, refech } =
    useMycoursedata();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  if (data) {
    return (
      <div
        className="MobilGradeReport"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        {data.length == 0 && <p>you have no course enrolled</p>}
        {data.map((course, index) => (
          <Mobilegradecards index={index} id={course.course} />
        ))}
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        className="MobilGradeReport"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <Loadingcomponent />
      </div>
    );
  }
  if (error) {
    return (
      <div
        className="MobilGradeReport"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <Errrorcomponent error={error} />
      </div>
    );
  }
}

export default MobilGradeReport;
