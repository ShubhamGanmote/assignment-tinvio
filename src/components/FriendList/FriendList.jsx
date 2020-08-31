import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './FriendList.scss';
import cx from 'classnames';

import SearchIcon from '../../assets/images/search-icon.svg';
import MenuIcon from '../UI/MenuIcon';
import NotificationDot from '../UI/NotificationDot';

import { FriendsList } from '../../data/FriendsList';
import { AddEllipsis } from '../../utils/AddEllipsis';

const FriendList = () => {
  const { id } = useParams();

  const [searchValue, setSearchValue] = useState('');
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(FriendsList);
  }, []);

  const searchChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const searchFriend = (event) => {
    if (event.key === 'Enter') {
      const searchedValues = FriendsList.filter((friend) => friend.name.toLowerCase().match(searchValue.toLowerCase()));
      setFriends(searchedValues);
    }
  };

  return (
    <div className='friend-list-wrapper'>
      <div className='search-bar'>
        <img src={SearchIcon} alt='' />
        <input
          type='text'
          placeholder='Search'
          value={searchValue}
          onChange={searchChangeHandler}
          onKeyDown={searchFriend}
        />
      </div>
      <div className='friends-list'>
        {friends.map((friend) => {
          return (
            <div key={friend.id} className={cx('friend', id.toString() === friend.id.toString() ? 'active' : '')}>
              <div className='avatar'>
                {friend.onlineStatus && <NotificationDot className='online-bell' fill='#2db606' />}
                <img src={friend.avatar} alt='' />
              </div>
              <div className='friend-details'>
                <div className='row'>
                  <span className='name'>{friend.name}</span>
                  <MenuIcon className='menu-icon' fill='white' />
                </div>
                <div className='row'>
                  <span className='last-msg'>{AddEllipsis(friend.lastMsg, 26)}</span>
                  <span className='time'>{friend.lastMsgTimestamp} mins</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendList;
