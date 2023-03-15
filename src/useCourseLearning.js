import { useQuery } from "react-query";
import axios from "axios";
import { useAuthHeader } from "react-auth-kit";

export default function useCoursrLearn(courseid, outlineid) {
  const authHeader = useAuthHeader();

  const fetchcourse = async (courseid) => {
    const res = await axios.get(
      `https://andigech.pythonanywhere.com/courses/${courseid}/outline/${outlineid}/contents`,
      {
        headers: { Authorization: authHeader() },
      }
    );
    console.log("dd");
    return res.data;
  };
  return useQuery(
    ["coursesdetail", courseid, outlineid],
    () => fetchcourse(courseid),
    {
      enabled: !!(courseid && outlineid),
    }
  );
}
