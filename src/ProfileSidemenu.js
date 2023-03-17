import { useState } from "react";
import {
  FaBook,
  FaDiscord,
  FaList,
  FaPercent,
  FaPercentage,
  FaProjectDiagram,
  FaSignOutAlt,
  FaStackOverflow,
  FaWrench,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import bannericon from "./assets/code.jpg";
import { useSignOut } from "react-auth-kit";
import useProfilehook from "./useProfiledatahook";
import useUserhook from "./useUser";
import { useMediaQuery } from "react-responsive";
function ProfileSidemenu() {
  const signOut = useSignOut();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const location = useLocation();
  const { data, isError, error, isFetching, refech } = useProfilehook("me");
  const [search, setsearch] = useState();
  const { isLoading, data: user, status } = useUserhook("me");
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      {isDesktopOrLaptop && (
        <div className="Sidemenu">
          {data && user && (
            <>
              <div className="ProfileSidemenu">
                <img
                  src={
                    data?.profile_pic?.startsWith("http")
                      ? data.profile_pic
                      : `https://andigech.pythonanywhere.com${data.profile_pic}`
                  }
                  alt="logo"
                />
                <h2>{user?.username}</h2>
                {user?.is_staff && (
                  <p>
                    Admin <FaWrench />
                  </p>
                )}
              </div>
            </>
          )}

          <div className="Buttons-menu">
            <div className="menus">
              <Link to={"courses"}>
                <div className="Menubutton">
                  <span id="menuicon">
                    <FaList />
                  </span>

                  <p>All Course</p>
                </div>
              </Link>
              <Link to="/mycourse">
                <div className="Menubutton">
                  <span id="menuicon">
                    <FaBook />
                  </span>

                  <p>My Course</p>
                </div>
              </Link>
              <Link to={"grade"}>
                <div className="Menubutton">
                  <span id="menuicon">
                    <FaPercent />
                  </span>

                  <p>Grade</p>
                </div>
              </Link>
              <Link>
                <div className="Menubutton">
                  <span id="menuicon">
                    <FaProjectDiagram />
                  </span>

                  <p>Projects</p>
                </div>
              </Link>
              <Link>
                <div className="Menubutton">
                  <span id="menuicon">
                    <FaDiscord />
                  </span>

                  <p>Discusion</p>
                </div>
              </Link>
              <Link onClick={() => signOut()}>
                <div className="Menubutton">
                  <span id="menuicon">
                    <FaSignOutAlt />
                  </span>

                  <p>Logout</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileSidemenu;
