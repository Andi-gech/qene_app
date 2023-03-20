import bannericon from "./assets/logo.png";
import Searchbar from "./searchbar";
import { useMediaQuery } from "react-responsive";

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

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <>
      {" "}
      {isDesktopOrLaptop && (
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
                  <FaLaptop size={25} color="black" />
                </Link>
              </div>
              <div className="Icon">
                <Link>
                  <FaBell size={25} color="black" />
                </Link>
              </div>
              <div className="Icon">
                <Link to={"/editprofile"}>
                  <FaWrench size={24} color="black" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbarmenu;
