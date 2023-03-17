import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import bannericon from "./assets/logo.jpg";
import profile_pic from "./assets/user-image-.png";
import useProfilehook from "./useProfiledatahook";
import { matchPath } from "react-router-dom";
function MobileNavbar({ onclick }) {
  const location = useLocation();

  const [clicked, setclicked] = useState("");
  const { data, isError, error, isFetching, refech } = useProfilehook("me");

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }
  var pathname = "";
  if (location.pathname === "/") {
    pathname = "Mycourse";
  } else if (location.pathname === "/courses") {
    pathname = "ALLcourse";
  } else if (
    matchPath(
      {
        path: "/courses/:id",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = "Learnboard";
  } else if (
    matchPath(
      {
        path: "/courses/:id/outline/:pk/quez",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = "Quiz";
  } else if (location.pathname === "/grade") {
    pathname = "Grade";
  } else if (
    matchPath(
      {
        path: "/courses/:id/enroll",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = "Enroll";
  } else if (
    matchPath(
      {
        path: "/editprofile",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = "Profile";
  }
  return (
    <div className="Mobile-navbar">
      <div className="navbar-mobile-logo">
        <img src={bannericon} />
      </div>
      <div className="navbar-menu-Title">{pathname}</div>
      <div className="navbar-menu-button" onClick={onclick}>
        {data?.profile_pic && (
          <img
            src={
              data?.profile_pic.startsWith("http")
                ? data?.profile_pic
                : `https://andigech.pythonanywhere.com${data?.profile_pic}`
            }
          />
        )}
        {!data?.profile_pic && <img src={profile_pic} />}
      </div>
    </div>
  );
}

export default MobileNavbar;
