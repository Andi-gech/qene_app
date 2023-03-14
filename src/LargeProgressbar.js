import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import bannericon from "./assets/s.jpg";
function LargeProgressbar() {
  return (
    <div className="LargeProgressbar">
      <div className="Largeprogressbars">
        <CircularProgressbar
          value={60}
          text={`${60} % `}
          circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
          styles={{
            trail: {
              strokeLinecap: "butt",
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
            },
            path: {
              strokeLinecap: "butt",
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
              stroke: "#FF7B77",
              transition: "stroke-dashoffset 2.5s ease 0s",
            },
            text: {
              fill: "#ddd",
              fontWeight: "bold",
            },
          }}
          strokeWidth={10}
        />
        <h4>Finished</h4>
      </div>
      <div className="LargeProgressTitle">
        <div className="LargeProgressImage">
          <img src={bannericon} />
        </div>
        <div className="LargeprogressName">
          <h4>Ui/Interactive Design</h4>
          <p>Design course</p>
        </div>
      </div>
    </div>
  );
}

export default LargeProgressbar;
