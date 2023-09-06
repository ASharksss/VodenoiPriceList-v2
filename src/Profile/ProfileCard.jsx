import React from 'react';
import avatar from '.././asserts/ava.jpg'

const ProfileCard = ({user}) => {
  return (
    <div className='container profile_card shadow'>
      <img src={avatar} alt="avatar" className='profile_card-img'/>
      <div className="profile_card-info">
        <div className='input-row'>
          <input type="text" value={user.organization} placeholder='Полное наименование предприятия' className='card_profile-input' disabled/>
          <input type="text" value={user.fio} placeholder='Директор' className='card_profile-input' disabled/>
          <input type="text" value={user.inn} placeholder='ИНН' className='card_profile-input' disabled/>
          <input type="text" placeholder='ОГРН' className='card_profile-input' disabled/>
        </div>

        <div className='input-row'>
          <input type="text" placeholder='Юридический адрес' className='card_profile-input' disabled/>
          <input type="text" value={user.number} placeholder='Телефон' className='card_profile-input' disabled/>
          <input type="text" placeholder='Город' className='card_profile-input'  disabled/>
          <input type="email" value={user.email} placeholder='Электронная почта' className='card_profile-input' disabled/>
        </div>
       </div>
    </div>
  );
};

export default ProfileCard;