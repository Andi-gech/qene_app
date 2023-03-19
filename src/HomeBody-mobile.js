import { useContext } from "react";
import { FaLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import AmharicModeContext from "./Amharicversion";
import DarkModeContext from "./DarkMODE";
import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";
import Mobilebutton from "./mobileButtogreen";
import MobileProgrsscard from "./Mobileprograsscard";
import useMycoursedata from "./usefetchmycoursehook";

function Homebodymobile({ onclick }) {
  console.log("home");
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { isAmharicMode, toggleAmharicMode } = useContext(AmharicModeContext);

  const {
    data: mycoursedata,
    isError: mycourser,
    error: Mycourseerror,
    isLoading,
  } = useMycoursedata();

  if (mycoursedata) {
    return (
      <div
        className="Mycourse-mobile"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <div className="Mycourse-mobile-texts">
          {isAmharicMode
            ? `በ ${mycoursedata?.length} ኮርሶች ውስጥ ተመዝግበዋል`
            : `You have ${mycoursedata?.length} course Enroll`}
        </div>
        {mycoursedata.length == 0 && (
          <div className="Mycourse-mobile-nocontent-add">
            <Link to={"courses"}>
              <Mobilebutton name={"Add course"} />
            </Link>
          </div>
        )}
        {mycoursedata?.length > 0 && (
          <div className="MobilecardList">
            {mycoursedata.map((course, index) => (
              <MobileProgrsscard course_id={course.course} index={index} />
            ))}
          </div>
        )}
      </div>
    );
  } else if (isLoading) {
    return (
      <div
        className="Mycourse-mobile"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <Loadingcomponent />
      </div>
    );
  } else if (Mycourseerror) {
    return (
      <div
        className="Mycourse-mobile"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <Errrorcomponent error={Mycourseerror} />
      </div>
    );
  }
}

export default Homebodymobile;
