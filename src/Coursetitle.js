import Profile from "./profile";
import useProfilehook from "./useProfiledatahook";
import useUserhook from "./useUser";

const Coursetitle = ({ coursetitle, description, teacherpid }) => {
  const { data, isError, error, isFetching, refech } =
    useProfilehook(teacherpid);

  const userid = data?.user;
  const { isLoading, data: user, status } = useUserhook(userid);

  if (user) {
    console.log(data.profile_pic);
    return (
      <div className="topic">
        <h3>
          {coursetitle}
          <span id="new">NEW</span>
        </h3>
        <p>{description}</p>
        <div className="profilee">
          <span id="teacherprofile">
            <p>By</p>
            <Profile profilepic={data.profile_pic} name={user.username} />
          </span>
        </div>
      </div>
    );
  }
};

export default Coursetitle;
