import { useState } from "react";
import Individualgrade from "./Individualgrade";
import useCourseOutlinehook from "./useCourseoutlineHook";
import useGradedata from "./useGrade";

function GradeProgressbar({ courseid }) {
  const [visible, setvisible] = useState(false);

  const { isLoading, data, isError, error, isFetching, refech } =
    useGradedata();
  const { data: courseoutline } = useCourseOutlinehook(courseid);

  const filter = data?.filter((c) => c.course == courseid);
  if (filter) {
    var c = 0;
    for (let index = 0; index < filter.length; index++) {
      c = c + filter[index].percent;
    }

    var c = c / courseoutline?.length;
  }
  const changestate = () => {
    setvisible(!visible);
  };
  return (
    <div>
      <div>{c || 0}/100</div>
      <p onClick={() => changestate()}>see</p>

      {visible && (
        <div>
          {filter.map((grade) => (
            <Individualgrade
              courseoutlineid={grade.courseoutlines}
              grade={grade.percent}
              allcourseoutline={courseoutline}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default GradeProgressbar;
