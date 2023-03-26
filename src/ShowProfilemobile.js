import login from "./assets/logo.jpg";
import Mobilebutton from "./mobileButtogreen";
import { useHistory, useNavigate, useParams } from "react-router-dom";
import useProfilehook from "./useProfiledatahook";
import profile_pic from "./assets/user-image-.png";
import useUserhook from "./useUser";
import Loadingcomponent from "./LoadingComponent";
function ShowProfile() {
  const { id } = useParams();
  const {
    data,
    isError,
    error,
    isFetching,
    refech,
    isLoading: Loading,
  } = useProfilehook(id);

  const { isLoading, data: user, status } = useUserhook(data?.user);
  let navigate = useNavigate();
  if (data && user) {
    return (
      <div
        className="Showprofile-mobile"
        style={{
          backgroundColor: "black",
        }}
      >
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
        <p>@{user.username}</p>
        <p style={{ color: "white", fontSize: 15, borderBottom: "none" }}>
          {user.email}
        </p>
        <span
          style={{
            marginTop: 30,
          }}
        >
          <Mobilebutton name={"Back to chat"} onclick={() => navigate(-1)} />
        </span>
      </div>
    );
  }
  if (isLoading || Loading) {
    <div
      className="Showprofile-mobile"
      style={{
        backgroundColor: "black",
      }}
    >
      <Loadingcomponent />
    </div>;
  }
}
export default ShowProfile;
