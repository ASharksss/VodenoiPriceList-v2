import React from 'react';
import ProfileCard from "./ProfileCard";
import './Profile.css'
import HistoryOrder from "./HistoryOrder";

const Profile = () => {
  return (
    <div>
      <ProfileCard/>
      <HistoryOrder/>
    </div>
  );
};

export default Profile;