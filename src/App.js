import "./App.css";
import Enrollbox from "./enroll-board";
import Homepage from "./Homepage";
import LearningBoard from "./Learningboard";
import My_course from "./Mycourses";
import { Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import CourseList from "./CourseList";
import { useParams } from "react-router-dom";
import Login from "./Login";
import { RequireAuth } from "react-auth-kit";
import Routef from "./Routes";
import Quiz from "./Quiz";
import Grades from "./Grade";
import Search from "./Search";
import Home from "./HOME";
import Navbarmenu from "./NAVBAR-menu";
import ProfileSidemenu from "./ProfileSidemenu";
import HomeBody from "./HomeBody";
import CourseListsNew from "./CourseListsNew";
import GradeReport from "./Gradebox";
import Enrolling from "./Enrolling";
import Learningbox from "./Learnbox";
import NOTfound from "./NOtfound";
import ProfileEdit from "./Profileedit";

function App() {
  return (
    <div className="Homepages">
      <Navbarmenu />
      <div className="inlinesProfilebody">
        <ProfileSidemenu />

        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <RequireAuth loginPath="/login">
                <HomeBody />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/Profile"
            element={
              <RequireAuth loginPath="/login">
                <ProfileEdit />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/*"
            element={
              <RequireAuth loginPath="/login">
                <NOTfound />
              </RequireAuth>
            }
          />
          <Route
            path="/mycourse"
            element={
              <RequireAuth loginPath="/login">
                <HomeBody />
              </RequireAuth>
            }
          />
          <Route
            path="/courses/:id/outline/:pk/quez"
            element={
              <RequireAuth loginPath="/login">
                <Quiz />
              </RequireAuth>
            }
          />

          <Route
            path="/Learn"
            element={
              <RequireAuth loginPath="/login">
                <LearningBoard />
              </RequireAuth>
            }
          />
          <Route
            path="/courses"
            element={
              <RequireAuth loginPath="/login">
                <CourseListsNew />
              </RequireAuth>
            }
          />
          <Route
            path="/courses/:id"
            element={
              <RequireAuth loginPath="/login">
                <Learningbox />
              </RequireAuth>
            }
          />
          <Route
            path="/courses/:id/enroll"
            element={
              <RequireAuth loginPath="/login">
                <Enrolling />
              </RequireAuth>
            }
          />
          <Route
            path="/grade"
            element={
              <RequireAuth loginPath="/login">
                <GradeReport />
              </RequireAuth>
            }
          />
          <Route
            path="/search/:searchinput"
            element={
              <RequireAuth loginPath="/login">
                <Search />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
