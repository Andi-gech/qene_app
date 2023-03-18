import Mobilecourscard from "./MobileCourseCArd";
import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";
import useCoursehook from "./useCoursedata";
import { useState } from "react";
import { isError } from "react-query";

function Mobilecourselistview() {
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
      <div onClick={() => changeUrl(i)} className="MobilePagenobutton">
        <p>{i}</p>
      </div>
    );
  }
  if (data) {
    return (
      <div className="MobileCourseList">
        <div className="MobileCourseListText">
          <p>there are {totalResult} courses</p>
        </div>
        <div className="MobileListcards">
          <div>
            {data.results.map((course, index) => (
              <Mobilecourscard
                key={course.id}
                user={course.Teacher}
                name={course.Course_name}
                coursepic={course.course_image}
                courseid={course.id}
                index={index}
              />
            ))}
          </div>

          <div className="MobilePagenos">{links}</div>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="MobileCourseList">
        <Loadingcomponent />
      </div>
    );
  }
}

export default Mobilecourselistview;
