import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import MainPage from "./Mainbody";
import Navbar from "./navbar";
import Search from "./Search";
import useCompletemodule from "./useCompletedmodule";
import useCompleteQuiz from "./useCompletedquiz";
import useCoursrLearn from "./useCourseLearning";
import useCourseOutlinehook from "./useCourseoutlineHook";
import useQuizdata from "./useQuizdata";

function LearningBoard() {
  const { id } = useParams();
  const [url, seturl] = useState();

  const { data: completed } = useCompletemodule();
  const { data: completedquiz } = useCompleteQuiz();
  const { data, isError, error, isFetching, refech } = useCourseOutlinehook(id);

  const { data: detail } = useCoursrLearn(id, url);

  const changeUrl = (i, data) => {
    seturl(i);

    console.log(i, data?.course_module_name);
  };
  useEffect(() => {
    change();
  }, [data]);

  const change = () => {
    if (data && data[0]) {
      console.log(data);
      seturl(data[0].id);
    }
  };
  const handlecomplete = () => {
    console.log("clicked");
  };
  return (
    <div>
      <Navbar />
      <Search />

      <div className="flex-class">
        <div className="Sideboard">
          <ul>
            <h1>Django</h1>
            {data && completed && (
              <>
                {data.map((course, index) => (
                  <>
                    {" "}
                    <li onClick={() => changeUrl(course.id, data[index])}>
                      {course.course_module_name}
                      {completed.some(
                        (item) => item.courseoutlinee === course.id
                      ) && <span style={{ fontSize: 25 }}>&#9989;</span>}
                    </li>
                  </>
                ))}
              </>
            )}
          </ul>
        </div>
        {detail && (
          <MainPage
            isCompleted={completed}
            detail={detail}
            changes={handlecomplete}
            id={id}
            outline={url}
          />
        )}
      </div>
    </div>
  );
}

export default LearningBoard;
