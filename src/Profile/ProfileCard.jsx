import React from 'react';
import avatar from '.././asserts/ava.jpg'

const ProfileCard = () => {
  return (
    <div className='container profile_card shadow'>
      <img src={avatar} alt="avatar" className='profile_card-img'/>
      <div className="profile_card-info">
        <div className='input-row'>
          <input type="text" placeholder='Полное наименование предприятия' className='card_profile-input'/>
          <input type="text" placeholder='Директор' className='card_profile-input'/>
          <input type="text" placeholder='ИНН' className='card_profile-input'/>
          <input type="text" placeholder='ОГРН' className='card_profile-input'/>
        </div>

        <div className='input-row'>
          <input type="text" placeholder='Юридический адрес' className='card_profile-input'/>
          <input type="text" placeholder='Телефон' className='card_profile-input'/>
          <input type="text" placeholder='Город' className='card_profile-input'/>
          <input type="text" placeholder='Электронная почта' className='card_profile-input'/>
        </div>
       </div>

    </div>
  );
};

export default ProfileCard;