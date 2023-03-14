import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useCourseOutlinehook(courseid) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (courseid) => {
    const res = await axios.get(
      `http://127.0.0.1:8000/courses/${courseid}/outline`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(["coursesoutline", courseid], () => fetchcourse(courseid), {
    enabled: !!courseid,
  });
}
