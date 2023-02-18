import profile from "./assets/profile.jpg";
const Profile = () => {
  return (
    <div className="profile">
      <ul>
        <li>Anduti</li>
        <img src={profile} alt="profile" />
      </ul>
    </div>
  );
};

export default Profile;
