import { CircularProgressbar } from "react-circular-progressbar";
import login from "./assets/logo.jpg";
import "react-circular-progressbar/dist/styles.css";
import bannericon from "./assets/vvl.gif";
function LargeProgressbar() {
  return (
    <div className="LargeProgressbar">
      <strong> Discuss With YOur fiends</strong>
      <img src={bannericon} width="80%" />
    </div>
  );
}

export default LargeProgressbar;
