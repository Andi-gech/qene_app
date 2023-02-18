import "./App.css";
import Button from "./Button";
import Tables from "./courseTable";
import Coursetitle from "./Coursetitle";
import Sidebanner from "./sidebanner";

function Enrollbox() {
  return (
    <div className="enrollbox">
      <div className="course-body">
        <div className="rsidebanner">
          <Coursetitle coursetitle={"Django"} />

          <div className="inlinebuttons">
            <Button />
            <p>Prerequests</p>
          </div>
          <div className="prerequesttables">
            <Tables />
          </div>
        </div>

        <Sidebanner />
      </div>
    </div>
  );
}

export default Enrollbox;
