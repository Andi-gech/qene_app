import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

import CourseCard from "./CourseCard";
import Errrorcomponent from "./errorComponent";
import LargeProgressbar from "./LargeProgressbar";
import Loadingcomponent from "./LoadingComponent";
import SimpleProgressbox from "./SmallProgressBox";
import Smallprogressbar from "./SmallProgresscard";
import useCoursehook from "./useCoursedata";
import useMycoursedata from "./usefetchmycoursehook";
import { useMediaQuery } from "react-responsive";

function HomeBody() {
  const { data, isError, error, isLoading, refech } = useCoursehook(1);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const {
    data: mycoursedata,
    isError: mycourser,
    error: Mycourseerror,
    isLoading: ismycourseLoading,
  } = useMycoursedata();
  if (mycoursedata && data) {
    return (
      <>
        {isDesktopOrLaptop && (
          <div className="HomeBody">
            <div className="HomebodyTitle">
              <h1>My Courses</h1>
              <p>{mycoursedata.length} course owned</p>
            </div>
            <div className="SELEctors-full">
              <div className="Selector-part">
                <p>Popular</p>
                <p>Favourite</p>
              </div>
              <div className="See-all-button">
                <p>see all</p>
              </div>
            </div>
            {data && (
              <div className="Cardlist">
                {data.results.map((course) => (
                  <CourseCard
                    key={course.id}
                    user={course.Teacher}
                    name={course.Course_name}
                    coursepic={course.course_image}
                    courseid={course.id}
                  />
                ))}
              </div>
            )}

            <div className="ProgressTitle">
              <h1>Progress</h1>
            </div>
            {mycoursedata && (
              <div className="Progress-cards">
                {mycoursedata.length == 0 && (
                  <div className="Notdata">
                    <p>You have no course Enrolled</p>
                    <Link to={"/courses"}>
                      <button>jump to courses</button>
                    </Link>
                  </div>
                )}
                {mycoursedata.length !== 0 && (
                  <>
                    <div className="Small-Progress-card">
                      {mycoursedata.map((course) => (
                        <Smallprogressbar courseid={course.course} />
                      ))}
                    </div>

                    <div className="Large-progress-card">
                      <LargeProgressbar />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
  if (isLoading || ismycourseLoading) {
    return <Loadingcomponent />;
  }
  if (error || Mycourseerror) {
    console.log(error);
    console.log(Mycourseerror);
    return <Errrorcomponent error={error ? error : Mycourseerror} />;
  }
}

export default HomeBody;
