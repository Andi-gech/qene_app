import useProfilehook from "./useProfiledatahook";
import profile_pic from "./assets/user-image-.png";
import { Link, useNavigate } from "react-router-dom";
function ChatProfile({ id }) {
  const { data, isError, error, isLoad, refech } = useProfilehook(id);
  const navigate = useNavigate();

  return (
    <div
      className="profilepics"
      onClick={() => navigate(`/user/${id}`, { replace: false })}
    >
      {" "}
      {data?.profile_pic && (
        <img
          src={
            data?.profile_pic.startsWith("http")
              ? data?.profile_pic
              : `http://127.0.0.1:8000/${data?.profile_pic}`
          }
        />
      )}
      {!data?.profile_pic && <img src={profile_pic} />}
    </div>
  );
}

export default ChatProfile;
