import Button from "./Button";
import Code from "./code";
import vid from "./assets/lesson1.mp4";
import { Link } from "react-router-dom";
const data = ["Item 1", "Item 2", "Item 3"];
function MainPage({ detail, changes, id, outline, isCompleted }) {
  return (
    <>
      <div className="defaultbody">
        <div className="startpage">
          <h1>wellcom to Django Course</h1>
          {detail.map((detail) => (
            <>
              <p>{detail.text_content}</p>
              {detail.image_content && (
                <img
                  src={
                    detail.image_content.startsWith("http")
                      ? detail.image_content
                      : `http://127.0.0.1:8000${detail.image_content}`
                  }
                  width={600}
                  height={250}
                />
              )}
              {detail.code_content && (
                <Code language="javascript" code={detail.code_content} />
              )}{" "}
            </>
          ))}
          {!isCompleted.some((item) => item.courseoutlinee === outline) && (
            <div onClick={changes} className="buttons-start">
              <Link to={`/courses/${id}/outline/${outline}/quez`}>
                {" "}
                <Button name={"start"} />
              </Link>
            </div>
          )}
          {isCompleted.some((item) => item.courseoutlinee === outline) && (
            <div className="buttons-start">
              {" "}
              <Button name={"quizcompleted"} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
