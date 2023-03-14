import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import bannericon from "./assets/code.jpg";
import Buttons from "./Buttons";
import Code from "./code";
import Loadingcomponent from "./LoadingComponent";
function CourseoutlineLearn({
  name,
  detail,
  isCompleted,
  outline,
  isLoading,
  id,
}) {
  if (detail) {
    return (
      <div className="greetingbody">
        <div className="Headings">
          <h2>{name}</h2>
        </div>
        {detail.map((detail) => (
          <>
            {detail.text_content && (
              <div className="paragraph">{detail.text_content}</div>
            )}
            {null && (
              <div className="Video">
                <YouTube
                  videoId="WNZehEJJPAg"
                  opts={{
                    height: "290",
                    width: "520",
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                />
              </div>
            )}
            {detail.image_content && (
              <div className="Image">
                <img
                  src={
                    detail.image_content.startsWith("http")
                      ? detail.image_content
                      : `http://127.0.0.1:8000${detail.image_content}`
                  }
                />
              </div>
            )}
            <div className="Codes">
              <Code language="javascript" code={detail.code_content} />
            </div>
          </>
        ))}
        <div className="Complete">
          {isCompleted.some((item) => item.courseoutlinee === outline) && (
            <Buttons name="Completed" />
          )}
          {!isCompleted.some((item) => item.courseoutlinee === outline) && (
            <Link to={`/courses/${id}/outline/${outline}/quez`}>
              <Buttons name="Go to quiz" />
            </Link>
          )}
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <Loadingcomponent />;
  }
}

export default CourseoutlineLearn;
