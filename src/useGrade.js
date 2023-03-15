import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useGradedata() {
  const authHeader = useAuthHeader();

  const fetchcourse = async () => {
    const res = await axios.get(`https://andigech.pythonanywhere.com/grades/`, {
      headers: { Authorization: authHeader() },
    });

    return res.data;
  };
  return useQuery("Grade", () => fetchcourse());
}
