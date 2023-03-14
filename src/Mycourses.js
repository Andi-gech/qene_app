import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import { RotatingLines } from "react-loader-spinner";
import { useIsFetching } from "react-query";

import { Link } from "react-router-dom";

import MycourseCard from "./Mycoursecard";
import Navbar from "./navbar";
import useMycoursedata from "./usefetchmycoursehook";

function My_course() {
  const authHeader = useAuthHeader();

  const { isLoading, data, isError, error, isFetching, refetch } =
    useMycoursedata();
  const OnDelete = (courseid) => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    // Make the request

    axios
      .delete(`http://127.0.0.1:8000/mycourse/${courseid}`)
      .then((response) => {
        console.log(response.data);
        refetch();

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
      {data && (
        <div>
          {data.map((course) => (
            <div>
              <Link key={course.id} to={`/courses/${course.course}`}>
                <MycourseCard key={course.id} courseid={course.course} />
              </Link>
              <button onClick={() => OnDelete(course.id)}>Leave Course</button>
            </div>
          ))}
        </div>
      )}
      {isLoading && (
        <>
          <RotatingLines visible={true} />
        </>
      )}
      {isError && (
        <>
          <span
            style={{
              color: "red",
              marginTop: 50,
            }}
          >
            {" "}
            we cant fetch your Data it seems a server fail please try again
          </span>
        </>
      )}
    </div>
  );
}

export default My_course;
