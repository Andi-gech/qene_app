import bannericon from "./assets/logo.jpg";
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

  if (location.pathname === "/login") {
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
      )}
    </>
  );
}

export default Navbarmenu;
