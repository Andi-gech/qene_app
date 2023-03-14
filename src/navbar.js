import { useState } from "react";
import { Link } from "react-router-dom";
import bannericon from "./assets/logo.jpg";
import Profile from "./profile";
import Search from "./Search";
import Searchbar from "./searchbar";
import useProfilehook from "./useProfiledatahook";
import useUserhook from "./useUser";
function Navbar() {
  const { data, isError, error, isFetching, refech } = useProfilehook("me");
  const [search, setsearch] = useState();
  const { isLoading, data: user, status } = useUserhook("me");
  const searchfun = (searchinput) => {
    setsearch(searchinput);
  };

  return (
    <div className="navbar">
      <div className="leftsidenavbar">
        <ul>
          <img src={bannericon} alt="logo" />

          <Searchbar />

          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/courses"}>Courses</Link>
          </li>

          <li>
            <Link to={"/mycourse"}>Enroll</Link>
          </li>
          <li>
            <Link to={"/grade"}>Grade</Link>
          </li>
          <li>
            <Link>Revise</Link>
          </li>
        </ul>
      </div>
      <div className="rightsidenavbar">
        <ul>
          <span id="ppid">
            {user && data && (
              <Profile
                name={user.username}
                profilepic={
                  data.profile_pic.startsWith("http")
                    ? data.profile_pic
                    : `http://127.0.0.1:8000${data.profile_pic}`
                }
              />
            )}
          </span>

          <li>☰</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
