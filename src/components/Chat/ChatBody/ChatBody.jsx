import React from 'react';
import StarRatings from 'react-star-ratings';
import ScrollToBottom from 'react-scroll-to-bottom';

import './ChatBody.scss';

const ChatBody = ({ messages }) => {
  return (
    <ScrollToBottom className='chat-body' behavior='smooth'>
      {messages &&
        messages.map((msg) => {
          if (msg.messageType === 'text') {
            return (
              <div key={msg.id} className={msg.messageBy === 'me' ? 'msg-me' : 'msg-other'}>
                <div className='avatar'>
                  <img src={msg?.avatar} alt='' />
                  <h6 className='timestamp'>{msg.timestamp}</h6>
                </div>
                <div className='chat-bubble' />
                <div className='message'>{msg.message}</div>
              </div>
            );
          } else if (msg.messageType === 'link') {
            return (
              <div key={msg.id} className={msg.messageBy === 'me' ? 'msg-me' : 'msg-other'}>
                <div className='avatar'>
                  <img src={msg?.avatar} alt='' />
                  <h6 className='timestamp'>{msg.timestamp}</h6>
                </div>
                <div className='chat-bubble' />
                <div className='message-details'>
                  <div className='message message-image'>
                    <img src={msg.image} alt='' />
                  </div>
                  <div className='link-details'>
                    <span className='title'>{msg.title}</span>
                    <span className='sub-txt'>{msg.subText}</span>
                    <div className='rating'>
                      <StarRatings
                        rating={msg.rating}
                        starRatedColor='gold'
                        numberOfStars={5}
                        starDimension='12px'
                        starSpacing='1px'
                      />
                      <span className='rating-txt'>{msg.number_ratings} Ratings</span>
                    </div>
                    <div className='buy-now-btn'>
                      <span>{msg.price} Buy Now</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={msg.id} className={msg.messageBy === 'me' ? 'msg-me' : 'msg-other'}>
                <div className='avatar'>
                  <img src={msg?.avatar} alt='' />
                  <h6 className='timestamp'>{msg.timestamp}</h6>
                </div>
                <div className='chat-bubble' />
                <div className='message-details'>
                  <div className='message message-image'>
                    <img src={msg.image} alt='' />
                  </div>
                </div>
              </div>
            );
          }
        })}
    </ScrollToBottom>
  );
};

export default ChatBody;
