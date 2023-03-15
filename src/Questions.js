import axios from "axios";
import { useState } from "react";
import Answer from "./Answer";
import useQuestiondata from "./useQuestion";
import { useAuthHeader } from "react-auth-kit";
import Buttons from "./Buttons";
import { FaCheck, FaCheckCircle, FaCross, FaCrosshairs } from "react-icons/fa";
function Questions({ id, pk, quizid }) {
  const [correctd, setcorrect] = useState({});
  const [mark, setmark] = useState(0);
  const [completed, setcompleted] = useState();
  const authHeader = useAuthHeader();

  const handleChildData = (status, questionid) => {
    console.log("out");
    const key = "passed" + questionid;

    if (correctd.hasOwnProperty(key)) {
      correctd[key] = status;
    } else {
      correctd[key] = status;
    }
  };

  const final = () => {
    const values = Object.values(correctd);

    const countTrueValues = values.filter((value) => value === true).length;

    const totalCount = values?.length;
    const percentTrue = (countTrueValues / totalCount) * 100;
    if (countTrueValues) {
      setmark(percentTrue);
    }
    if (percentTrue) {
      Post(percentTrue);
    } else {
      Post(0);
    }

    setcompleted(true);
  };

  const { data: question } = useQuestiondata(id, pk, quizid);
  const Post = (percent) => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    // Make the request

    axios
      .post("https://andigech.pythonanywhere.com/grades/", {
        courseoutlines: pk,
        course: id,
        percent: percent,
      })
      .then((response) => {
        console.log(response.data);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  };

  if (question) {
    return (
      <div className="HomeBody" id="quiz">
        <form>
          {completed && (
            <p
              id="mark"
              style={{
                color: "green",
              }}
            >
              You Got {mark}%
            </p>
          )}
          {question.map((questions, index) => (
            <div className="Eachquestion">
              <h2
                style={{
                  fontWeight: "bolder",
                }}
              >
                {index + 1} {questions.text}
              </h2>

              <Answer
                onData={handleChildData}
                id={id}
                pk={pk}
                quizid={quizid}
                weight={questions.weight}
                questionid={questions.id}
              />
              {completed && Object.values(correctd)[index] && (
                <div className="Correction-true">
                  <FaCheckCircle />
                  Yes you got it Right!!
                </div>
              )}
              {completed && !Object.values(correctd)[index] && (
                <div className="Correction-false">your answer is false</div>
              )}
            </div>
          ))}
        </form>
        <div className="Buttondiv">
          {!completed && <Buttons name={"submit"} onChange={final} />}
          {completed && <Buttons name={"submitted"} onChange={final} />}
        </div>
      </div>
    );
  }
}
export default Questions;
