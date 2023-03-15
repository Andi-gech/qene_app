import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useCoursehook(pageno) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (pageno) => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/courses/?page=${pageno}`,
      {
        headers: { Authorization: authHeader() },
      }
    );

    return res.data;
  };
  return useQuery(["Allcourses", pageno], () => fetchcourse(pageno), {
    enabled: !!pageno,
  });
}
