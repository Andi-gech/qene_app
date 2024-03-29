import axios from "axios";
import { useContext, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { useParams } from "react-router-dom";
import DarkModeContext from "./DarkMODE";
import Loadingcomponent from "./LoadingComponent";
import Mobilebutton from "./mobileButtogreen";
import MobileQuizQuestions from "./MobileQuizQuiestions";
import Questions from "./Questions";
import useQuizdata from "./useQuizdata";

function MobileQuizboard() {
  const { id, pk } = useParams();
  const [ready, setready] = useState(false);
  const { data: quiz, isLoading } = useQuizdata(id, pk);
  const authHeader = useAuthHeader();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
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
  if (quiz) {
    return (
      <div
        className="MobileQuizboard"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        {!ready && (
          <div className="are-you-sure">
            <p>
              Are You sure once you there there is
              <br /> <strong>no turning back</strong>
            </p>
            <Mobilebutton
              name={"Start"}
              onclick={() => {
                setready(true);
                Setcompleted();
              }}
            />
          </div>
        )}

        {ready && (
          <div>
            {quiz.map((quiz, index) => (
              <MobileQuizQuestions
                id={id}
                pk={pk}
                quizid={quiz.id}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    );
  } else if (isLoading) {
    return <Loadingcomponent />;
  }
}
export default MobileQuizboard;
