import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useUserhook(userid) {
  const authHeader = useAuthHeader();

  const fetchUSer = async (userid) => {
    const res = await axios.get(`http://127.0.0.1:8000/auth/users/${userid}`, {
      headers: { Authorization: authHeader() },
    });
    console.log("dd");
    return res.data;
  };
  return useQuery(["user", userid], () => fetchUSer(userid), {
    enabled: !!userid,
  });
}
