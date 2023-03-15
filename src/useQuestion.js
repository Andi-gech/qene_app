import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useQuestiondata(courseid, outlineid, quizid) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (courseid) => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/courses/${courseid}/outline/${outlineid}/quize/${quizid}/question`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(
    ["question", courseid, outlineid, quizid],
    () => fetchcourse(courseid),
    {
      enabled: !!(courseid && outlineid && quizid),
    }
  );
}
