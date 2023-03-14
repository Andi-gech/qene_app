import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthHeader } from "react-auth-kit";

const Profile = ({ profilepic, name }) => {
  const authHeader = useAuthHeader();

  return (
    <div className="profile">
      <ul>
        <li>{name} </li>
        <img src={profilepic} alt="profile" />
      </ul>
    </div>
  );
};

export default Profile;
