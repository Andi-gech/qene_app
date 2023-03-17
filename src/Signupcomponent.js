import axios from "axios";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { Link, Navigate } from "react-router-dom";
import vid from "./assets/s.jpg";
import login from "./assets/logo.jpg";
import Mobilebutton from "./mobileButtogreen";

function SignUpMobileComponent() {
  const isAuthenticated = useIsAuthenticated();
  const [eror, seterror] = useState();
  const [createed, setcreated] = useState(false);
  const [userame, setuserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signin = useSignIn();
  const [jasons, setjasons] = useState({});
  const fetchData = async (jasonss) => {
    console.log(jasonss, "jasonsss");
    const res = await axios
      .post("https://andigech.pythonanywhere.com/auth/users/", jasonss)
      .then((res) => {
        console.log("dd", res);
        if (res.status === 201) {
          setcreated(true);
        }
      })
      .catch((error) => seterror(error.response.data));
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    fetchData({
      username: userame,
      password: password,
      email: Email,
      first_name: firstname,
      last_name: Lastname,
    });
  };
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="Signupcomponent">
        <h2>WELLCOME TO QENE</h2>
        <div className="Sign-upbox">
          <h3>Signup</h3>
          {createed && (
            <div className="create-indicator">
              <p>Account created</p>
            </div>
          )}

          <form>
            <div className="MobileEachInput">
              <p>firstname</p>
              <input
                placeholder="Firstname"
                id="Firstname"
                name="Firstname"
                type="text"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstname}
              />
            </div>
            {eror?.firstname && <p id="errors-signup">{eror.firstname}</p>}
            <div className="MobileEachInput">
              <p>Lastname</p>
              <input
                placeholder="Lastname"
                id="Lastname"
                name="Lastname"
                type="text"
                onChange={(event) => setLastName(event.target.value)}
                value={Lastname}
              />
            </div>
            {eror?.Lastname && <p id="errors-signup">{eror.Lastname}</p>}
            <div className="MobileEachInput">
              <p>Email adress</p>
              <input
                placeholder="Email"
                id="Email"
                name="Email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={Email}
              />
            </div>
            {eror?.email && <p id="errors-signup">{eror.email}</p>}
            <div className="MobileEachInput">
              <p>username</p>
              <input
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                onChange={(event) => setuserName(event.target.value)}
                value={userame}
              />
            </div>
            {eror?.username && <p id="errors-signup">{eror.username}</p>}
            <div className="MobileEachInput">
              <p>password</p>
              <input
                placeholder="password"
                id="password"
                name="password"
                type="text"
                onChange={(event) => setpassword(event.target.value)}
                value={password}
              />
            </div>
            {eror?.password && <p id="errors-signup">{eror.password[0]}</p>}
            <div className="Mobilesignupbutton">
              <Mobilebutton name={"Signup"} onclick={handleSubmit} />
              <Link to={"/login"}>
                <p>already have account?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpMobileComponent;
