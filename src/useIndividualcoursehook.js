import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useIndividualcoursehook(courseid) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (courseid) => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/courses/${courseid}`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(["courses", courseid], () => fetchcourse(courseid), {
    enabled: !!courseid,
  });
}
