import React, { useState } from 'react';

import './ChatFooter.scss';

import PaperClipIcon from '../../../assets/images/paperclip-icon.svg';
import EmojiIcon from '../../../assets/images/emoji-icon.svg';
import SendIcon from '../../../assets/images/send-icon.svg';

const ChatFooter = () => {
  const [message, setMessage] = useState('');

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className='chat-footer'>
      <div className='input-wrapper'>
        <img src={PaperClipIcon} alt='' />
        <textarea type='text' placeholder='Type your message...' onChange={messageChangeHandler} value={message} />
      </div>
      <div className='send-wrapper'>
        <img src={EmojiIcon} alt='' />
        <div className='send'>
          <img src={SendIcon} alt='' />
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
