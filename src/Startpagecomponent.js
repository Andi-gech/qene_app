import {
  FaFacebookMessenger,
  FaLanguage,
  FaQuestionCircle,
  FaThemeco,
} from "react-icons/fa";
import bannericon from "./assets/new.png";

function StartPageComponent({ onclick }) {
  return (
    <div className="StartPaged">
      <h2 style={{ margin: 0 }}>Wellcome to our website</h2>
      <div className="Images">
        <img src={bannericon} width={"100%"} />
      </div>

      <h4 style={{ margin: 0 }}>
        in this website You can enroll on a lot of courses provided by Qene App
      </h4>
      <p>
        Discuss With Friend with our Super chat
        <FaFacebookMessenger
          color="lightblue"
          style={{ marginLeft: 10 }}
          size={29}
        />
      </p>
      <p>
        Evalute Your self With Quiz
        <FaQuestionCircle
          color="lightblue"
          style={{ marginLeft: 10 }}
          size={29}
        />
      </p>
      <p>
        With Dark/Light Mode Feature
        <FaThemeco color="lightblue" style={{ marginLeft: 10 }} size={29} />
      </p>
      <p>
        support Two Languages
        <FaLanguage color="lightblue" style={{ marginLeft: 10 }} size={29} />
      </p>
      <div className="Start">
        <button onClick={onclick}>ok</button>
      </div>
    </div>
  );
}

export default StartPageComponent;
