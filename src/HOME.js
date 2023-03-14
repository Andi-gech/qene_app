import CourseListsNew from "./CourseListsNew";
import GradeReport from "./Gradebox";
import HomeBody from "./HomeBody";
import Navbarmenu from "./NAVBAR-menu";
import ProfileSidemenu from "./ProfileSidemenu";

function Home() {
  return (
    <div className="Homepages">
      <Navbarmenu />
      <div className="inlinesProfilebody">
        <ProfileSidemenu />
        <GradeReport />
      </div>
    </div>
  );
}

export default Home;
