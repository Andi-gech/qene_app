import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";
import Mobilegradecards from "./MobileGradecards";
import useMycoursedata from "./usefetchmycoursehook";

function MobilGradeReport() {
  const { isLoading, data, isError, error, isFetching, refech } =
    useMycoursedata();
  if (data) {
    return (
      <div className="MobilGradeReport">
        Your Grade
        {data.map((course, index) => (
          <Mobilegradecards index={index} id={course.course} />
        ))}
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="MobilGradeReport">
        <Loadingcomponent />
      </div>
    );
  }
  if (error) {
    return (
      <div className="MobilGradeReport">
        <Errrorcomponent error={error} />
      </div>
    );
  }
}

export default MobilGradeReport;
