import React from 'react';
import ProfileCard from "./ProfileCard";
import './Profile.css'
import HistoryOrder from "./HistoryOrder";

const Profile = () => {
  return (
    <div className='profile_wrapper'>
      <ProfileCard/>
      <HistoryOrder/>
    </div>
  );
};

export default Profile;