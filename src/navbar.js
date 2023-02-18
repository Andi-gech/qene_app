import bannericon from "./assets/logo.jpg";
import Profile from "./profile";
import Searchbar from "./searchbar";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftsidenavbar">
        <ul>
          <img src={bannericon} alt="logo" />
          <Searchbar />
          <li>Home</li>
          <li>Courses</li>
          <li>Enrolled</li>
          <li>Grade</li>
          <li>Revise</li>
        </ul>
      </div>
      <div className="rightsidenavbar">
        <ul>
          <span id="ppid">
            <Profile />
          </span>

          <li>☰</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
