import axios from "axios";
import { useState } from "react";
import { useAuthHeader } from "react-auth-kit";
import profile_pic from "./assets/user-image-.png";
import Mobilebutton from "./mobileButtogreen";
import useProfilehook from "./useProfiledatahook";
import useUserhook from "./useUser";
function ProfileEdit() {
  const [createed, setcreated] = useState(false);
  const [imagecreateed, setimagecreated] = useState(false);
  const [userame, setuserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Image, setImage] = useState("");

  const { data, isError, error, isFetching, refech } = useProfilehook("me");

  const { isLoading, data: user, status } = useUserhook("me");
  const authHeader = useAuthHeader();

  const fetchData = async (jasonss) => {
    console.log(jasonss, "jasonsss");
    const res = await axios
      .put("https://andigech.pythonanywhere.com/auth/users/me/", jasonss, {
        headers: { Authorization: authHeader() },
      })
      .then((res) => {
        console.log("dd", res);
        if (res.status === 200) {
          setcreated(true);
        }
      })
      .catch((error) => console.log(error.response.data));
  };
  const putimage = async (jasonss) => {
    console.log(jasonss, "jasonsss");
    const res = await axios
      .put("https://andigech.pythonanywhere.com/profile/me/", jasonss, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: authHeader(),
        },
      })
      .then((res) => {
        console.log("dd", res);
        if (res.status === 200) {
          setimagecreated(true);
        }
      })
      .catch((error) => console.log(error.response.data));
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
    if (firstname !== "" && Lastname !== "") {
      fetchData({
        first_name: firstname,
        last_name: Lastname,
      });
    }
    if (Image && user) {
      putimage({ profile_pic: Image, user: user.id });
    }
  };
  if (data && user) {
    return (
      <div className="Profilemobilepages">
        <div className="ProfileImage">
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
        </div>
        <input
          placeholder="Image"
          id="Imageinput"
          name="imageinput"
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
        />
        {createed && (
          <div className="create-indicator">
            <p>sucessfully edited</p>
          </div>
        )}
        {imagecreateed && (
          <div className="create-indicator">
            <p>image sucessfully edited</p>
          </div>
        )}
        <div className="MobileEachInput">
          <p>firstname</p>
          <input
            placeholder={user.first_name}
            id="Firstname"
            name="Firstname"
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstname}
          />
        </div>

        <div className="MobileEachInput">
          <p>Lastname</p>
          <input
            placeholder={user.last_name}
            id="Lastname"
            name="Lastname"
            type="text"
            onChange={(event) => setLastName(event.target.value)}
            value={Lastname}
          />
        </div>

        <div className="MobileEachInput">
          <p>Email adress</p>
          <input
            placeholder={user.email}
            id="Email"
            name="Email"
            type="email"
            disabled
            onChange={(event) => setEmail(event.target.value)}
            value={Email}
          />
        </div>

        <div className="MobileEachInput">
          <p>username</p>
          <input
            placeholder={user.username}
            disabled
            id="username"
            name="username"
            type="text"
            onChange={(event) => setuserName(event.target.value)}
            value={userame}
          />
        </div>
        <div className="Mobilesignupbutton">
          <Mobilebutton name={"Signup"} onclick={handleSubmit} />
        </div>
      </div>
    );
  }
}
export default ProfileEdit;
