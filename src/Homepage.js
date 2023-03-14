import { useAuthUser } from "react-auth-kit";

import { useAuthHeader } from "react-auth-kit";
import Navbar from "./navbar";
import { useSignOut } from "react-auth-kit";

function Homepage() {
  const auth = useAuthUser();
  const signOut = useSignOut();

  const authHeader = useAuthHeader();

  return (
    <div>
      <Navbar />
      Hello {auth().username}
      {authHeader()}
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export default Homepage;
