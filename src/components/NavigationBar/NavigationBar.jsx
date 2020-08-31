import React from 'react';
import { useParams } from 'react-router-dom';

import './NavigationBar.scss';

import WhatsAppIcon from '../../assets/images/whatsapp-icon.png';
import MessengerIcon from '../../assets/images/messenger-icon.png';
import ViberIcon from '../../assets/images/viber-icon.png';
import SkypeIcon from '../../assets/images/skype-icon.png';
import NimbuzzIcon from '../../assets/images/nimbuzz-icon.png';

import { checkActiveItem } from '../../utils/CheckActiveItem';

const navItems = [
  {
    id: 1,
    label: 'whatsapp',
    labelIcon: WhatsAppIcon,
  },
  {
    id: 2,
    label: 'messenger',
    labelIcon: MessengerIcon,
  },
  {
    id: 3,
    label: 'viber',
    labelIcon: ViberIcon,
  },
  {
    id: 4,
    label: 'skype',
    labelIcon: SkypeIcon,
  },
  {
    id: 5,
    label: 'nimbuzz',
    labelIcon: NimbuzzIcon,
  },
];

const NavigationBar = () => {
  const { provider } = useParams();
  return (
    <div className='navigation-bar-wrapper'>
      <div className='hamburger-icon'>
        <div />
        <div />
        <div />
      </div>
      <div className='nav-items'>
        {navItems &&
          navItems.map((item) => {
            return (
              <div key={item.id} className={checkActiveItem(item.label, provider) ? 'active' : ''}>
                <div className='item'>
                  <img src={item.labelIcon} alt='' />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NavigationBar;
