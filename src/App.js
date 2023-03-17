import "./App.css";
import Enrollbox from "./enroll-board";
import Homepage from "./Homepage";
import LearningBoard from "./Learningboard";
import My_course from "./Mycourses";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import Navbar from "./navbar";
import CourseList from "./CourseList";
import { useParams } from "react-router-dom";
import Login from "./Login";
import { RequireAuth, useSignOut } from "react-auth-kit";
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
import { useMediaQuery } from "react-responsive";
import Homebodymobile from "./HomeBody-mobile";
import MobileNavbar from "./MobileNavbar";
import MobileLearnBoard from "./Mobile-LearnBoard";
import MobileQuizboard from "./MobileQuizboard";
import Mobilecourselistview from "./MobileCourseList";
import MobileEnroll from "./MobileEnroll";
import { useState } from "react";
import MobilGradeReport from "./MobileGradeREport";
import SignUpMobileComponent from "./Signupcomponent";

function App() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const [clicked, setclicked] = useState(false);
  const signOut = useSignOut();
  const location = useLocation();

  return (
    <>
      {isDesktopOrLaptop && (
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
      )}
      {isTabletOrMobile && (
        <div className="Mobile-Homepages">
          <MobileNavbar
            onclick={() => {
              setclicked(!clicked);
            }}
          />
          {clicked && !(location.pathname === "/login") && (
            <div className="navbartab">
              <Link to="/">
                <p>Home</p>
              </Link>

              <Link to={"courses"}>
                <p>All Course</p>
              </Link>
              <Link to={"grade"}>
                <p>Grade</p>
              </Link>
              <Link>
                <p>Project</p>
              </Link>
              <Link>
                <p>Discusion</p>
              </Link>
              <Link onClick={signOut}>
                <p>SignOut</p>
              </Link>
            </div>
          )}

          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUpMobileComponent />} />
            <Route
              exact
              path="/"
              element={
                <RequireAuth loginPath="/login">
                  <Homebodymobile />
                </RequireAuth>
              }
            />{" "}
            <Route
              path="/courses/:id/outline/:pk/quez"
              element={
                <RequireAuth loginPath="/login">
                  <MobileQuizboard />
                </RequireAuth>
              }
            />
            <Route
              path="/courses/:id"
              element={
                <RequireAuth loginPath="/login">
                  <MobileLearnBoard />
                </RequireAuth>
              }
            />
            <Route
              path="/courses/:id/enroll"
              element={
                <RequireAuth loginPath="/login">
                  <MobileEnroll />
                </RequireAuth>
              }
            />
            <Route
              path="/courses"
              element={
                <RequireAuth loginPath="/login">
                  <Mobilecourselistview />
                </RequireAuth>
              }
            />
            <Route
              path="/grade"
              element={
                <RequireAuth loginPath="/login">
                  <MobilGradeReport />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
