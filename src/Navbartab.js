import { useSignOut } from "react-auth-kit";
import { Link } from "react-router-dom";
import useProfilehook from "./useProfiledatahook";
import profile_pic from "./assets/user-image-.png";
import useUserhook from "./useUser";
function Navbartab() {
  const signOut = useSignOut();
  const { data, isError, error, isFetching, refech } = useProfilehook("me");
  const { data: user } = useUserhook("me");

  return (
    <div className="navbartab">
      {data?.profile_pic && (
        <img
          src={
            data?.profile_pic.startsWith("http")
              ? data?.profile_pic
              : `https://andigech.pythonanywhere.com${data?.profile_pic}`
          }
        />
      )}
      {!data?.profile_pic && <img src={profile_pic} />}
      {user && <p id="name">@{user.username}</p>}
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to={"courses"}>
        <p>All Course</p>
      </Link>
      <Link to={"grade"}>
        <p>Grade</p>
      </Link>
      <Link to={"editprofile"}>
        <p>EditProfile </p>
      </Link>
      <Link onClick={signOut}>
        <p>SignOut</p>
      </Link>
    </div>
  );
}

export default Navbartab;
