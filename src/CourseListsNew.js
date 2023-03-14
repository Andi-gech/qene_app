import { useState } from "react";
import Allcoursesdetailcard from "./allcoursedetailcard";
import Allcoursescard from "./Allcoursesmallcard";
import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";
import useCoursehook from "./useCoursedata";

function CourseListsNew() {
  const [url, seturl] = useState(1);
  const [bigcard, setbigcard] = useState(null);

  const { data, isError, error, isLoading, refech } = useCoursehook(url);
  const totalResult = data?.count;
  const changeUrl = (i) => {
    seturl(i);
  };

  var links = [];
  var limit = 3;
  var totalLinks = Math.ceil(totalResult / limit);

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <div onClick={() => changeUrl(i)} className="button">
        <p>{i}</p>
      </div>
    );
  }
  const handlemouseout = () => {
    console.log("mouseout");
    setbigcard(null);
  };
  const handlemouseover = (course) => {
    console.log("mouse in", course);
    setbigcard(course);
  };
  if (data) {
    return (
      <div className="HomeBody">
        <div className="HomebodyTitle">
          <h1>All courses</h1>
          <p>{totalResult} courses in database</p>
        </div>
        <div className="searchbdetailbox">
          <div className="smallcoursecard">
            {data.results.map((course) => (
              <Allcoursescard
                name={course.Course_name}
                profilepic={course.course_image}
                id={course.id}
                onmouseout={handlemouseout}
                onmouseover={() => handlemouseover(course)}
              />
            ))}
          </div>
          {bigcard && (
            <div className="Individualcoursecard">
              <Allcoursesdetailcard
                name={bigcard.Course_name}
                Profilepic={bigcard.course_image}
              />
            </div>
          )}
        </div>
        <div className="Pagenos">{links}</div>
      </div>
    );
  }
  if (isLoading) {
    return <Loadingcomponent />;
  }
  if (error) {
    console.log(error);

    return <Errrorcomponent error={error} />;
  }
}

export default CourseListsNew;
