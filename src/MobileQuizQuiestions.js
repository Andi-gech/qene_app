import axios from "axios";
import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import Code from "./code";
import Answer from "./Answer";
import useQuestiondata from "./useQuestion";
import MobileAnswer from "./Mobile-Answer";
import { FaCheckCircle } from "react-icons/fa";
import Mobilebutton from "./mobileButtogreen";

function MobileQuizQuestions({ id, pk, quizid }) {
  const [correctd, setcorrect] = useState({});
  const [mark, setmark] = useState(0);
  const [completed, setcompleted] = useState();
  const authHeader = useAuthHeader();

  const handleChildData = (status, questionid) => {
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
      <div className="QuizQuestions">
        <form>
          {completed && <p id="result">You Got {mark}%</p>}
          {question.map((questions, index) => (
            <div className="mobile-each-questions">
              <p id="Questions">
                {index + 1} {questions.text}
              </p>
              {questions.code && <Code code={questions.code} />}
              <MobileAnswer
                onData={handleChildData}
                id={id}
                pk={pk}
                quizid={quizid}
                weight={questions.weight}
                questionid={questions.id}
              />
              {completed && Object.values(correctd)[index] && (
                <div className="Mobile-Correction-true">
                  <FaCheckCircle />
                  Yes you got it Right!!
                </div>
              )}
              {completed && !Object.values(correctd)[index] && (
                <div className="Mobile-Correction-false">
                  your answer is false
                </div>
              )}
            </div>
          ))}
        </form>
        <div className="MobileButton-Submit">
          {!completed && <Mobilebutton name={"Submit"} onclick={final} />}
          {completed && <Mobilebutton name={"Submited"} />}
        </div>
      </div>
    );
  }
}
export default MobileQuizQuestions;
