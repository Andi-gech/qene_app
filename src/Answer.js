import { useEffect, useState } from "react";
import useAnswerdata from "./useAnswer";

function Answer({ id, pk, quizid, questionid, onData }) {
  const [Selected, setSelected] = useState();
  const [correct, setcorrect] = useState("");

  const { data } = useAnswerdata(id, pk, quizid, questionid);

  useEffect(() => {
    changecorrect();
    send();
  }, [Selected, correct]);
  const send = () => {
    if (Selected && correct) {
      if (Selected == correct) {
        onData(true, questionid);
        console.log("in");
      } else {
        onData(false, questionid);
      }
    }
  };

  const changecorrect = () => {
    if (data) {
      for (let index = 0; index < data.length; index++) {
        if (data[index].is_correct) {
          console.log(data[index].choice_text);
          setcorrect(data[index].choice_text);
          console.log("");
        }
      }
    }
  };

  const onValueChange = (event) => {
    setSelected(event.target.value);

    console.log("in on change", event.target.value);
  };

  if (data) {
    return (
      <div
        className="choice"
        style={{
          marginRight: 270,
        }}
      >
        {data.map((answers) => (
          <div className="Answer">
            <input
              type="radio"
              name={questionid}
              value={answers.choice_text}
              onChange={onValueChange}
            />
            {answers.choice_text}
          </div>
        ))}
      </div>
    );
  }
}

export default Answer;
