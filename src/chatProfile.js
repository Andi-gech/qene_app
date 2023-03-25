import useProfilehook from "./useProfiledatahook";
import profile_pic from "./assets/user-image-.png";
function ChatProfile({id}) {
    const { data, isError, error, isLoad, refech } = useProfilehook(id)
    return ( <div className="profilepics"> {data?.profile_pic && (
        <img
          src={
            data?.profile_pic.startsWith("http")
              ? data?.profile_pic
              : `http://127.0.0.1:8000/${data?.profile_pic}`
          }
        />
      )}
      {!data?.profile_pic && <img src={profile_pic} />}</div> );
}

export default ChatProfile;