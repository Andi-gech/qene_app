import axios from "axios";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { Link, Navigate } from "react-router-dom";
import vid from "./assets/s.jpg";
import login from "./assets/logo.jpg";

function SignUpMobileComponent() {
  const isAuthenticated = useIsAuthenticated();
  const [eror, seterror] = useState();
  const [userame, setuserName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const signin = useSignIn();
  const [jasons, setjasons] = useState({});
  const fetchData = async () => {
    const res = await axios
      .post("https://andigech.pythonanywhere.com/auth/users/", jasons)
      .then((res) => {
        console.log("dd", res);
      })
      .catch((error) => seterror(error.response.data));
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
    setjasons({
      username: userame,
      password: password,
      email: Email,
      first_name: firstname,
      last_name: Lastname,
    });

    fetchData();
    console.log(jasons);
  };
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="Signupcomponent">
        <h2>WELLCOME TO QENE</h2>
        <div className="Sign-upbox">
          <h3>Signup</h3>
          <form onSubmit={handleSubmit}>
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
            {eror?.firstname && (
              <p
                style={{
                  fontSize: 12,
                  color: "red",
                  width: "70vw",

                  textAlign: "justify",
                }}
              >
                {eror.firstname}
              </p>
            )}
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
            {eror?.Lastname && (
              <p
                style={{
                  fontSize: 12,
                  color: "red",
                  width: "70vw",

                  textAlign: "justify",
                }}
              >
                {eror.Lastname}
              </p>
            )}
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
            {eror?.email && (
              <p
                style={{
                  fontSize: 12,
                  color: "red",
                  width: "70vw",

                  textAlign: "justify",
                }}
              >
                {eror.email}
              </p>
            )}
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
            {eror?.username && (
              <p
                style={{
                  fontSize: 12,
                  color: "red",
                  width: "70vw",

                  textAlign: "justify",
                }}
              >
                {eror.username}
              </p>
            )}
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
            {eror?.password && (
              <p
                style={{
                  fontSize: 12,
                  color: "red",
                  width: "70vw",

                  textAlign: "justify",
                }}
              >
                {eror.password}
              </p>
            )}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpMobileComponent;
