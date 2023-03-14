import bannericon from "./assets/logo.jpg";
import Searchbar from "./searchbar";
import {
  FaBell,
  FaFile,
  FaHandPaper,
  FaInbox,
  FaLaptop,
  FaPaperPlane,
  FaRegUserCircle,
  FaUserGraduate,
  FaWaveSquare,
  FaWrench,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
function Navbarmenu() {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }

  return (
    <div className="Navbarmenu">
      <div className="Logoinfo">
        <img src={bannericon} alt="logo" />
        <p>ENE</p>
      </div>
      <div className="Notification">
        <div className="input">
          <input placeholder="search courses..." />
        </div>
        <div className="Icons">
          <div className="Icon">
            <Link>
              <FaLaptop size={25} />
            </Link>
          </div>
          <div className="Icon">
            <Link>
              <FaBell size={25} />
            </Link>
          </div>
          <div className="Icon">
            <Link>
              <FaRegUserCircle size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarmenu;
