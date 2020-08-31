import React from 'react';

import './ChatHeader.scss';

import StarIcon from '../../../assets/images/star-icon.svg';
import VoiceCallIcon from '../../../assets/images/call-icon.svg';
import VideoCallIcon from '../../../assets/images/video-icon.svg';

const ChatHeader = () => {
  return (
    <div className='chat-header'>
      <div className='room-name'>
        <span>Kristen Mckellar</span>
        <span className='msg-status'> is typing...</span>
      </div>
      <div className='chat-icons'>
        <div className='icon'>
          <img src={StarIcon} alt='' />
        </div>
        <div className='icon'>
          <img src={VoiceCallIcon} alt='' />
        </div>
        <div className='icon'>
          <img src={VideoCallIcon} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
