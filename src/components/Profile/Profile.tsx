import React from "react";
import { useTypedSelector } from "../../store/hooks/useTypedSelector";
import "./profile.css";

const Profile = () => {
  const { username, profile_img } = useTypedSelector(
    (state) => state.profile.profile
  );

  return (
    <div className="profile">
      <div>
        <img src={`${profile_img}`} alt="avatar" />
      </div>
      <div>
        <span>{username}</span>
      </div>
    </div>
  );
};

export default Profile;
