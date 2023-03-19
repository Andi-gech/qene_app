import { useContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import bannericon from "./assets/logo.jpg";

import useProfilehook from "./useProfiledatahook";
import { matchPath } from "react-router-dom";
import DarkModeContext from "./DarkMODE";
import AmharicModeContext from "./Amharicversion";
function MobileNavbar({ onclick }) {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { isAmharicMode, toggleAmharicMode } = useContext(AmharicModeContext);

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
    pathname = isAmharicMode ? "የኔ ኮርሶች" : "Mycourse";
  } else if (
    matchPath(
      {
        path: "/courses",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = isAmharicMode ? "ሁሉም ኮርሶች" : "ALLcourse";
  } else if (
    matchPath(
      {
        path: "/courses/:id",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = isAmharicMode ? "የመማርያ ሰሌዳ" : "Learnboard";
  } else if (
    matchPath(
      {
        path: "/courses/:id/outline/:pk/quez",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = isAmharicMode ? "ፈተና" : "Quiz";
  } else if (location.pathname === "/grade") {
    pathname = isAmharicMode ? "ውጤት" : "Grade";
  } else if (
    matchPath(
      {
        path: "/courses/:id/enroll",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = isAmharicMode ? "ተመዝገብ" : "Enroll";
  } else if (
    matchPath(
      {
        path: "/editprofile",
        exact: true,
      },
      location.pathname
    )
  ) {
    pathname = isAmharicMode ? "የግል ማህደር" : "Profile";
  }
  return (
    <div
      className="Mobile-navbar"
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <div className="navbar-mobile-logo">
        <img
          src={bannericon}
          style={{
            filter: `invert(${isDarkMode ? "100%" : "0%"})`,
          }}
        />
      </div>
      <div className="navbar-menu-Title">{pathname}</div>
      <div className="navbar-menu-button" onClick={onclick}>
        ☰
      </div>
    </div>
  );
}

export default MobileNavbar;
