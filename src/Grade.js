import { Link } from "react-router-dom";
import GradeProgressbar from "./GradeProgressbar";
import MycourseCard from "./Mycoursecard";
import Navbar from "./navbar";
import useMycoursedata from "./usefetchmycoursehook";

function Grades() {
  const { isLoading, data, isError, error, isFetching, refech } =
    useMycoursedata();
  if (data) {
    return (
      <div>
        <Navbar />

        {data.map((course) => (
          <div>
            <MycourseCard key={course.id} courseid={course.course} />
            <GradeProgressbar courseid={course.id} />
          </div>
        ))}
      </div>
    );
  }
}

export default Grades;
