import React from 'react';
import { useParams } from 'react-router-dom';

import './Inbox.scss';
import cx from 'classnames';

import AddUser from '../../assets/images/add-user.svg';
import { checkActiveItem } from '../../utils/CheckActiveItem';

const inboxMenu = [
  {
    label: 'All Messages',
    value: 54,
  },
  {
    label: 'Unread',
    value: 34,
  },
  {
    label: 'Important',
    value: 6,
  },
  {
    label: 'Drafts',
    value: 17,
  },
];

const groupMenu = [
  {
    label: 'Teams',
    value: 23,
  },
  {
    label: 'Groups',
    value: 4,
  },
  {
    label: 'Channels',
    value: 63,
  },
  {
    label: 'Locations',
    value: null,
  },
  {
    label: 'Media',
    value: 137,
  },
];

const Inbox = () => {
  const { messageType } = useParams();
  return (
    <div className='inbox-wrapper'>
      <div className='heading-bar'>
        <span className='title'>Inbox</span>
        <div className='add-user'>
          <img src={AddUser} alt='' />
        </div>
      </div>
      <div className='items-wrapper'>
        <div className='items'>
          {inboxMenu &&
            inboxMenu.map((menuItem, i) => {
              return (
                <div key={i} className={cx('item', checkActiveItem(messageType, menuItem.label) ? 'active' : '')}>
                  <span className='label'>{menuItem.label}</span>
                  <span className='value'>{menuItem.value}</span>
                </div>
              );
            })}
        </div>
        <div className='items'>
          {groupMenu &&
            groupMenu.map((menuItem, i) => {
              return (
                <div key={i} className={cx('item', checkActiveItem(messageType, menuItem.label) ? 'active' : '')}>
                  <span className='label'>{menuItem.label}</span>
                  <span className='value'>{menuItem.value}</span>
                </div>
              );
            })}
        </div>
        <div className='items'>
          <div className='item'>
            <span className='label'>Help</span>
          </div>
          <div className='item'>
            <span className='label'>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
