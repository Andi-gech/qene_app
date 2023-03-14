import axios from "axios";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useIsAuthenticated } from "react-auth-kit";
import { Link, Navigate } from "react-router-dom";
import vid from "./assets/s.jpg";
import login from "./assets/logo.jpg";
function Login() {
  const isAuthenticated = useIsAuthenticated();
  const [eror, seterror] = useState();
  const [userame, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const signin = useSignIn();
  const [jasons, setjasons] = useState({});
  const fetchData = async () => {
    const res = await axios
      .post("http://127.0.0.1:8000/auth/jwt/create/", jasons)
      .then((res) => {
        signin({
          token: res.data.access,
          expiresIn: 3600,
          tokenType: "JWT",
          authState: { username: userame },
        });
      })
      .catch((error) => seterror(error.response.data.detail));
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
    setjasons({
      username: userame,
      password: password,
    });

    fetchData();
    console.log(jasons);
  };
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="Loginbody">
        <div
          className="RightLoginbody"
          style={{
            backgroundImage: `url(${vid})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="loginbox">
          <div className="header">
            <h1>Login</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputboxs">
              <div className="Individualbox">
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
              <div className="Individualbox">
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
              {eror && (
                <p
                  style={{
                    color: "red",
                    width: 220,
                  }}
                >
                  {eror}
                </p>
              )}
              <div className="button">
                <button type="submit">Login</button>
                <Link to="/sigsdasnup">
                  <p
                    style={{
                      color: "grey",
                      marginTop: 20,
                      marginLeft: -190,
                    }}
                  >
                    don't have an account?
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
