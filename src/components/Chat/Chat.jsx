import React from 'react';

import './Chat.scss';

import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
import ChatFooter from './ChatFooter/ChatFooter';

import { Messages } from '../../data/Messages';

const Chat = () => {
  return (
    <div className='chat-wrapper'>
      <ChatHeader />
      <ChatBody messages={Messages} />
      <ChatFooter />
    </div>
  );
};

export default Chat;
