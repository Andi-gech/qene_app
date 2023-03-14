import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";

export default function useProfilehook(teacherid) {
  const authHeader = useAuthHeader();

  const fetchProfile = async (teacherid) => {
    const res = await axios.get(`http://127.0.0.1:8000/profile/${teacherid}`, {
      headers: { Authorization: authHeader() },
    });
    console.log("dd");
    return res.data;
  };
  return useQuery(["profile", teacherid], () => fetchProfile(teacherid), {
    enabled: !!teacherid,
  });
}