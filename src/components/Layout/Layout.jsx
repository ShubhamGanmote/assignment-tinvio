import React from 'react';

import './Layout.scss';

import NavigationBar from '../NavigationBar/NavigationBar';
import Inbox from '../Inbox/Inbox';
import FriendList from '../FriendList/FriendList';
import Chat from '../Chat/Chat';
import Profile from '../Profile/Profile';

const Layout = () => {
  return (
    <div className='layout-wrapper'>
      <NavigationBar />
      <Inbox />
      <FriendList />
      <Chat />
      <Profile />
    </div>
  );
};

export default Layout;
