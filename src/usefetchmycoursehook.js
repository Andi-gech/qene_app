import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";

export default function useMycoursedata() {
  const authHeader = useAuthHeader();
  const fetchmycourse = async () => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/mycourse`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    return res.data;
  };
  return useQuery("mycourse", fetchmycourse);
}
