import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkModeContext from "./DarkMODE";
import Errrorcomponent from "./errorComponent";
import Loadingcomponent from "./LoadingComponent";
import RoomCardbox from "./Roomcardbox";
import useMycoursedata from "./usefetchmycoursehook";
import useRoom from "./useRoom";

function DiscusseMobile() {
  const { isLoading, data, isError, error, isFetching, refech } = useRoom();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  if (data) {
    return (
      <div
        className="Discussebox-mobile"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <h1>Join Available Room</h1>
        {data.map((course) => (
          <div style={{ marginLeft: 90 }}>
            <RoomCardbox name={course} />
          </div>
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

export default DiscusseMobile;
