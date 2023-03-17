import { Link } from "react-router-dom";
import YouTube from "react-youtube";

import Code from "./code";
import Mobilebutton from "./mobileButtogreen";
function MobileLearncontent({
  name,
  detail,
  isCompleted,
  outline,
  isLoading,
  id,
}) {
  if (detail) {
    return (
      <div className="MobileLearncontent">
        {detail?.map((details) => (
          <>
            {details.text_content && (
              <div className="MobileLearncontentParagraph">
                <p>{details.text_content} </p>
              </div>
            )}
            {null && (
              <div className="Mobile-Video">
                <YouTube
                  videoId="WNZehcdEJJPAg"
                  opts={{
                    height: "200px",
                    width: "100%",

                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                />
              </div>
            )}
            {details.image_content && (
              <div className="MobileLearncontentimage">
                <img
                  src={
                    details.image_content.startsWith("http")
                      ? details.image_content
                      : `https://andigech.pythonanywhere.com${details.image_content}`
                  }
                />
              </div>
            )}
            {details.code_content && (
              <div className="MobileLearncontentCodes">
                <Code language="javascript" code={details.code_content} />
              </div>
            )}
          </>
        ))}
        {isCompleted.some((item) => item.courseoutlinee === outline) && (
          <div className="Button-gotoquiz">
            <Mobilebutton name={"comleted"} />
          </div>
        )}
        {!isCompleted.some((item) => item.courseoutlinee === outline) && (
          <div className="Button-gotoquiz">
            <Link to={`/courses/${id}/outline/${outline}/quez`}>
              <Mobilebutton name={"Go to Quiz"} />
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default MobileLearncontent;
