import axios from "axios";
import { useAuthHeader } from "react-auth-kit";
import { useQuery } from "react-query";

export default function useMessagehook(id) {
  const authHeader = useAuthHeader();

  const fetchProfile = async (id) => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/room/${id}/message/`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(["messagess", id], () => fetchProfile(id), {
    enabled: !!id,
  });
}
