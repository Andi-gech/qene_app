import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useIndividualroomhook(courseid) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (courseid) => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/room/${courseid}`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(["room", courseid], () => fetchcourse(courseid), {
    enabled: !!courseid,
  });
}
