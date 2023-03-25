import { useSignOut } from "react-auth-kit";
import { Link, matchPath, useLocation } from "react-router-dom";
import useProfilehook from "./useProfiledatahook";
import profile_pic from "./assets/user-image-.png";
import useUserhook from "./useUser";
import DarkModeContext from "./DarkMODE";
import { useContext } from "react";
import AmharicModeContext from "./Amharicversion";
import ClickAwayListener from "react-click-away-listener";
import { FaMoon, FaSun } from "react-icons/fa";
function Navbartab({ onclick }) {
  const signOut = useSignOut();
  const { data, isError, error, isFetching, refech } = useProfilehook("me");
  const { data: user } = useUserhook("me");
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { isAmharicMode, toggleAmharicMode } = useContext(AmharicModeContext);
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

  return (
    <ClickAwayListener onClickAway={onclick}>
      <div
        className="navbartab"
        style={{
          background: isDarkMode ? "#202123" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <div className="Profilewithdarkmode">
          {isDarkMode && (
            <div className="icons" onClick={toggleDarkMode}>
              <FaSun color="white" size={19} />
            </div>
          )}
          {!isDarkMode && (
            <div className="icons" onClick={toggleDarkMode}>
              <FaMoon />
            </div>
          )}
          <div className="Profileimage">
            {!data?.profile_pic && <img src={profile_pic} />}
            {data?.profile_pic && (
              <img
                src={
                  data?.profile_pic.startsWith("http")
                    ? data?.profile_pic
                    : `https://andigech.pythonanywhere.com${data?.profile_pic}`
                }
              />
            )}

            {user && <p id="name">@{user.username}</p>}
          </div>
        </div>
        <Link to="/">
          <p
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          >
            {isAmharicMode ? "የኔ ኮርሶች" : "Home"}
          </p>
        </Link>
        <Link to={"courses"}>
          <p
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          >
            {isAmharicMode ? "ሁሉም ኮርሶች" : " All Course"}
          </p>
        </Link>
        <Link to={"grade"}>
          <p
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          >
            {isAmharicMode ? "ውጤት" : " Grade"}
          </p>
        </Link>
        <Link to={"/discus"}>
          <p
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          >
            Chat
          </p>
        </Link>
        <Link to={"editprofile"}>
          <p
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          >
            {isAmharicMode ? "የግል ማህደር" : " Editprofile"}
          </p>
        </Link>

        <Link>
          <p
            style={{
              color: isDarkMode ? "white" : "black",
            }}
            onClick={toggleAmharicMode}
          >
            {isAmharicMode ? "English" : " አማርኛ"}
          </p>
        </Link>
        <Link onClick={signOut}>
          <p
            style={{
              color: isDarkMode ? "white" : "black",
            }}
          >
            {isAmharicMode ? "ይውጡ" : " SignOut"}
          </p>
        </Link>
      </div>
    </ClickAwayListener>
  );
}

export default Navbartab;
