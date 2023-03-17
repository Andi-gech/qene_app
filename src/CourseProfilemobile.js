import bannericon from "./assets/code.jpg";
import useProfilehook from "./useProfiledatahook";
import useUserhook from "./useUser";
function CourseProfile({ user }) {
  const { data, isError, error, isFetching, refech } = useProfilehook(user);
  const { data: users } = useUserhook(data?.user);
  if (data && users) {
    return (
      <div className="MobileProfile">
        <p>By {users.username}</p>
        <img
          src={
            data.profile_pic.startsWith("http")
              ? data.profile_pic
              : `https://andigech.pythonanywhere.com${data.profile_pic}`
          }
        />
      </div>
    );
  }
}
export default CourseProfile;
