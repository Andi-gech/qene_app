import { FaLine } from "react-icons/fa";
import Mobilebutton from "./mobileButtogreen";
import MobileProgrsscard from "./Mobileprograsscard";
import useMycoursedata from "./usefetchmycoursehook";

function Homebodymobile({ onclick }) {
  console.log("home");
  const {
    data: mycoursedata,
    isError: mycourser,
    error: Mycourseerror,
    isLoading: ismycourseLoading,
  } = useMycoursedata();

  if (mycoursedata) {
    return (
      <div className="Mycourse-mobile">
        <div className="Mycourse-mobile-texts">
          You have {mycoursedata?.length} course Enroll
        </div>
        {mycoursedata.length == 0 && (
          <div className="Mycourse-mobile-nocontent-add">
            <Mobilebutton name={"Add course"} />
          </div>
        )}
        {mycoursedata?.length > 0 && (
          <div className="MobilecardList">
            {mycoursedata.map((course) => (
              <MobileProgrsscard course_id={course.course} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Homebodymobile;
