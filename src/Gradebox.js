import { useLocation } from "react-router-dom";
import Errrorcomponent from "./errorComponent";
import Gradecard from "./Gradecard";
import Loadingcomponent from "./LoadingComponent";
import useMycoursedata from "./usefetchmycoursehook";

function GradeReport() {
  const { isLoading, data, isError, error, isFetching, refech } =
    useMycoursedata();

  if (data) {
    return (
      <div className="HomeBody">
        <div className="HomebodyTitle">
          <h1>Grade Report</h1>
        </div>
        <div>
          {data.map((course) => (
            <Gradecard id={course.course} />
          ))}
        </div>
      </div>
    );
  }
  if (isLoading) {
    <Loadingcomponent />;
  }
  if (error) {
    <Errrorcomponent error={error} />;
  }
}

export default GradeReport;
