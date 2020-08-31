import React from 'react';

import './Profile.scss';

import NotificationBell from '../../assets/images/notification-icon.svg';
import NotficationDot from '../UI/NotificationDot';
import MessengerLogo from '../../assets/images/messenger-icon.png';
import MenuIcon from '../UI/MenuIcon';

const Profile = () => {
  return (
    <div className='profile-wrapper'>
      <div className='profile-header-bar'>
        <div>
          <img src={NotificationBell} alt='' />
          <NotficationDot className='notification-blue' fill='#2696ff' />
        </div>
        <div className='name-wrapper'>
          <span className='name'>Matt Thompson</span>
          <NotficationDot className='online-indicator' fill='#2696ff' />
        </div>
      </div>
      <div className='scroll-bar-wrapper'>
        <div className='profile-name'>
          <div className='provider-details'>
            <img className='chat-provider-icon' src={MessengerLogo} alt='' />
            <MenuIcon className='profile-menu' fill='#929292' />
          </div>
          <div className='profile-pic'>
            <img src='https://avatars.dicebear.com/api/female/kirstan-mckellar.svg' alt='' />
          </div>
          <div className='name'>
            <span>Kristen Mckellar</span>
          </div>
          <div className='address'>
            <span>Cape Town, RSA</span>
          </div>
        </div>
        <div className='profile-details'>
          <span className='label'>Nickname:</span>
          <span className='value'>Kila kalia</span>
        </div>
        <div className='profile-details'>
          <span className='label'>Tel:</span>
          <span className='value'>072 143 9920</span>
        </div>
        <div className='profile-details'>
          <span className='label'>Date of Birth:</span>
          <span className='value'>July 12, 1988</span>
        </div>
        <div className='profile-details'>
          <span className='label'>Gender:</span>
          <span className='value'>Female</span>
        </div>
        <div className='profile-details'>
          <span className='label'>Language:</span>
          <span className='value'>English</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
