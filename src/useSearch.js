import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useSearchCoursehook(searchinput) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (searchinput) => {
    const res = await axios.get(
      `http://127.0.0.1:8000/courses/?search=${searchinput}`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(["search", searchinput], () => fetchcourse(searchinput), {
    enabled: !!searchinput,
  });
}
