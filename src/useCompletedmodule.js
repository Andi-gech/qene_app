import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";

export default function useCompletemodule() {
  const authHeader = useAuthHeader();
  const fetchmycourse = async () => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/completedmodule/`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    return res.data;
  };
  return useQuery("completedcourses", fetchmycourse);
}
