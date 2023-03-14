import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";

import { useParams } from "react-router-dom";

import "./App.css";
import Button from "./Button";
import Tables from "./courseTable";
import Coursetitle from "./Coursetitle";
import Navbar from "./navbar";
import Sidebanner from "./sidebanner";
import useCourseOutlinehook from "./useCourseoutlineHook";
import useMycoursedata from "./usefetchmycoursehook";
import useIndividualcoursehook from "./useIndividualcoursehook";
function Enrollbox() {
  const { id } = useParams();
  const authHeader = useAuthHeader();

  const { data: course } = useIndividualcoursehook(id);
  const { data, isError, error, isFetching, refech } = useCourseOutlinehook(id);
  const { data: mycourse, refetch } = useMycoursedata();
  const enroll = () => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    // Make the request

    axios
      .post("http://127.0.0.1:8000/mycourse/", {
        course: id,
      })
      .then((response) => {
        refetch();
        console.log(response.data);
        // Do something with the response data
      })
      .catch((error) => {
        console.error(error);
        // Handle errors
      });
  };

  return (
    <div>
      <Navbar />
      <div className="enrollbox">
        <div className="course-body">
          <div className="rsidebanner">
            {course && (
              <>
                <Coursetitle
                  coursetitle={course.Course_name}
                  description={course.description}
                  teacherpid={course.Teacher}
                />
                {mycourse && (
                  <div className="inlinebuttons">
                    {mycourse.some((item) => item.course === course.id) && (
                      <button disabled>Enrolled</button>
                    )}
                    {!mycourse.some((item) => item.course === course.id) && (
                      <button onClick={enroll}>Enroll</button>
                    )}

                    <p>Prerequests</p>
                  </div>
                )}
              </>
            )}
            <div className="prerequesttables">
              {data && <Tables courseoutline={data} />}
            </div>
          </div>

          <Sidebanner />
        </div>
      </div>
    </div>
  );
}

export default Enrollbox;
