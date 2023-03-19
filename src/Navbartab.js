import { useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";
import useProfilehook from "./useProfiledatahook";
import profile_pic from "./assets/user-image-.png";
import useUserhook from "./useUser";
import DarkModeContext from "./DarkMODE";
import { useContext } from "react";
import AmharicModeContext from "./Amharicversion";
function Navbartab() {
  const signOut = useSignOut();
  const { data, isError, error, isFetching, refech } = useProfilehook("me");
  const { data: user } = useUserhook("me");
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { isAmharicMode, toggleAmharicMode } = useContext(AmharicModeContext);

  return (
    <div
      className="navbartab"
      style={{
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
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
      {user && <p id="name">@{user.username}</p>}
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
          onClick={toggleDarkMode}
        >
          Darkmode
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
  );
}

export default Navbartab;
