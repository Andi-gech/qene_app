import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import Buttons from "./Buttons";
import CourseoutlineLearn from "./CourseOutlineLeatn";
import useCompletemodule from "./useCompletedmodule";
import useCoursrLearn from "./useCourseLearning";
import useCourseOutlinehook from "./useCourseoutlineHook";
function Learningbox() {
  const { id } = useParams();

  const { data, isError, error, isFetching, refech } = useCourseOutlinehook(id);
  const { data: completed } = useCompletemodule();
  const [selectedOption, setSelectedOption] = useState(null);
  const { data: detail, isLoading } = useCoursrLearn(id, selectedOption?.id);
  const dataoption = data?.map(({ id, course_module_name }) => ({
    id,
    label: course_module_name,
    value: id,
  }));
  console.log(selectedOption);
  const Handlestartclicks = () => {
    if (dataoption) {
      setSelectedOption(dataoption[0]);
    }
    console.log("clicked");
  };
  if (dataoption) {
    return (
      <div className="HomeBody">
        <div className="HomebodyTitles">
          <h1>learning board</h1>

          <Select
            onChange={setSelectedOption}
            required
            id="Select"
            isClearable={false}
            options={dataoption}
            placeholder="select"
          />
        </div>
        {selectedOption && (
          <CourseoutlineLearn
            name={selectedOption.label}
            detail={detail}
            isCompleted={completed}
            id={id}
            outline={selectedOption.id}
            isLoading={isLoading}
          />
        )}
        {!selectedOption && (
          <div className="greetingbody">
            <div className="Headings">
              <h2>Heollo wellcom to Tis Course</h2>
            </div>
            <div className="paragraph">
              There are several strategies you can use to get better results in
              online courses: <br />
              1,<strong>Create a schedule:</strong> Online courses often require
              self-discipline and time management. Create a schedule for your
              study time, and make sure to stick to it.
              <br />
              2,<strong>Eliminate distractions:</strong> Find a quiet and
              comfortable space to study without any distractions. Turn off your
              phone, social media, or any other distractions that may disrupt
              your focus.
              <br />
              3:<strong>Participate in discussions:</strong> Most online courses
              have discussion forums or chat rooms where you can interact with
              other students and instructors. Participate in these discussions
              to get a better understanding of the course material.
              <br /> 5:<strong>Ask for help: </strong> If you are struggling
              with a particular concept or assignment, don't hesitate to ask
              your instructor for help. They are there to support you and help
              you succeed. <br />
              <strong> 6:Stay organized: </strong> 6:Stay organized: Keep track
              of important deadlines, assignments, and notes. Create a system
              that works for you, such as a planner or a digital calendar.{" "}
              <br /> 7:Practice self-motivation: Motivation is key when it comes
              to online learning. Find ways to stay motivated, such as setting
              goals or rewarding yourself for completing tasks. <br /> 8:Take
              breaks: It's important to take breaks to avoid burnout. Take short
              breaks every hour or so to rest your eyes and clear your mind. By
              following these strategies, you can improve your chances of
              success in online courses.
            </div>

            <div className="Complete">
              <Buttons name={"Start"} onChange={Handlestartclicks} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Learningbox;
