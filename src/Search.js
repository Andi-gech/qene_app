import { useAuthHeader } from "react-auth-kit";
import { Link, useParams } from "react-router-dom";
import Coursetitle from "./Coursetitle";
import Navbar from "./navbar";
import useQuestiondata from "./useQuestion";
import useSearchCoursehook from "./useSearch";
function Search() {
  const { searchinput } = useParams();

  const { data } = useSearchCoursehook(searchinput);
  if (data) {
    return (
      <div className="search">
        <Navbar />
        <div className="searchoutput">
          {data.count == 0 && <p>no data Existed that match "{searchinput}"</p>}
          {data.count !== 0 && (
            <div>
              {data.results.map((course) => (
                <Link key={course.id} to={`/courses/${course.id}/enroll`}>
                  <Coursetitle
                    coursetitle={course.Course_name}
                    teacherpid={course.Teacher}
                  />
                </Link>
              ))}{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
