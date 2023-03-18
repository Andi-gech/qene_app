import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import bannericon from "./assets/logo.jpg";

import useProfilehook from "./useProfiledatahook";
import { matchPath } from "react-router-dom";
function MobileNavbar({ onclick }) {
  const location = useLocation();

  const [clicked, setclicked] = useState("");

  if (
    matchPath(
      {
        path: "/login",
        exact: true,
      },
      location.pathname
    ) ||
    matchPath(
      {
        path: "/signup",
        exact: true,
      },
      location.pathname
    )
  ) {
    return null;
  }
  var pathname = "";
  if (
    matchPath(
      {
        path: "/",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = "Mycourse";
  } else if (
    matchPath(
      {
        path: "/courses",
        exact: true,
      },
      location.pathname
    )
  ) {
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
        ☰
      </div>
    </div>
  );
}

export default MobileNavbar;
