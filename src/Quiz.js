import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";
import Button from "./Button";
import Buttons from "./Buttons";
import Questions from "./Questions";
import useAnswerdata from "./useAnswer";
import useQuestiondata from "./useQuestion";
import useQuizdata from "./useQuizdata";

function Quiz() {
  const { id, pk } = useParams();
  const [ready, setready] = useState(false);
  const { data: quiz } = useQuizdata(id, pk);
  const authHeader = useAuthHeader();

  if (ready) {
    return (
      <div>
        {quiz.map((quiz) => (
          <Questions id={id} pk={pk} quizid={quiz.id} />
        ))}
      </div>
    );
  }
  const Setcompleted = () => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    // Make the request

    axios
      .post("https://andigech.pythonanywhere.com//completedmodule/", {
        courseoutlinee: pk,
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

  if (!ready) {
    return (
      <div className="Quiz_get_started">
        <p>You are About To Enter The exam Hall </p>
        <p>
          Are You confident to take thos quiz once You have in
          <br />
          <strong>There is no turninng back</strong>
        </p>
        <div className="Buttonstart">
          <Buttons
            name={"start"}
            onChange={() => {
              setready(true);
              Setcompleted();
            }}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
