import { RequireAuth } from "react-auth-kit";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Enrollbox from "./enroll-board";
import Homepage from "./Homepage";
import LearningBoard from "./Learningboard";
import My_course from "./Mycourses";

import Navbar from "./navbar";
import CourseList from "./CourseList";

function Routef() {
  return (
    <div>
      <Navbar />{" "}
    </div>
  );
}

export default Routef;
