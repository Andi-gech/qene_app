import Coursetitle from "./Coursetitle";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import Navbar from "./navbar";
import useCoursehook from "./useCoursedata";
import Search from "./Search";
function CourseList() {
  const [posts, setPosts] = useState([]);
  const [visible, setvisible] = useState(false);
  const [url, seturl] = useState(1);

  const { data, isError, error, isLoading, refech } = useCoursehook(url);

  const totalResult = data?.count;
  const changeUrl = (i) => {
    seturl(i);
  };

  var links = [];
  var limit = 3;
  var totalLinks = Math.ceil(totalResult / limit);

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <div className="pagination">
        <div onClick={() => changeUrl(i)} className="page-link">
          {i}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="home">
        <h2>Wellcome to Qene App Anduti</h2>
        <div className="lists">
          <h5>here are some list of course</h5>
          {data && (
            <>
              {" "}
              {data.results.map((course) => (
                <Link key={course.id} to={`/courses/${course.id}/enroll`}>
                  <Coursetitle
                    coursetitle={course.Course_name}
                    teacherpid={course.Teacher}
                  />
                </Link>
              ))}
            </>
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
                we cant fetch your Data it seems a server fail please try ag
              </span>
            </>
          )}

          <div className="Paginator">{links}</div>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
