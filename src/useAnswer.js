import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useAnswerdata(courseid, outlineid, quizid, quesionid) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (courseid) => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/courses/${courseid}/outline/${outlineid}/quize/${quizid}/question/${quesionid}/answer`,
      {
        headers: { Authorization: authHeader() },
      }
    );

    return res.data;
  };
  return useQuery(
    ["Answer", courseid, outlineid, quizid, quesionid],
    () => fetchcourse(courseid),
    {
      enabled: !!(courseid && outlineid && quizid && quesionid),
    }
  );
}
