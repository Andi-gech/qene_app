import axios from "axios";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { Link, Navigate } from "react-router-dom";

import Mobilebutton from "./mobileButtogreen";
function LoginMobile() {
  const isAuthenticated = useIsAuthenticated();
  const [eror, seterror] = useState();

  const [userame, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const signin = useSignIn();
  const [jasons, setjasons] = useState({});
  const fetchData = async (jassons) => {
    const res = await axios
      .post("https://andigech.pythonanywhere.com/auth/jwt/create/", jassons)
      .then((res) => {
        signin({
          token: res.data.access,
          expiresIn: 3600,
          tokenType: "JWT",
          authState: { username: userame },
        });
      })
      .catch((error) => seterror(error.response.data));
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    fetchData({
      username: userame,
      password: password,
    });
  };
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  } else {
    return (
      <div
        className="Signupcomponent"
        style={{
          color: "black",
        }}
      >
        <h2>WELLCOME TO QENE</h2>
        <div className="Sign-upbox">
          <h3
            style={{
              color: "black",
            }}
          >
            LOGIN
          </h3>

          <form>
            <div className="MobileEachInput">
              <p
                style={{
                  color: "black",
                }}
              >
                username
              </p>
              <input
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                onChange={(event) => setuserName(event.target.value)}
                value={userame}
              />
            </div>

            <div className="MobileEachInput">
              <p
                style={{
                  color: "black",
                }}
              >
                password
              </p>
              <input
                placeholder="password"
                id="password"
                name="password"
                type="text"
                onChange={(event) => setpassword(event.target.value)}
                value={password}
              />
            </div>
            {eror?.detail && <p id="errors-signup">{eror.detail}</p>}
            <div className="Mobilesignupbutton">
              <Mobilebutton name={"Login"} onclick={handleSubmit} />
              <Link to={"/Signup"}>
                <p>Donthave have account?</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginMobile;
