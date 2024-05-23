import React from 'react';
import { Icon } from '../icon';

const UisLockOpenAlt: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M17,9H9V7c0-0.8,0.3-1.5,0.9-2.1c1.2-1.2,3.1-1.2,4.2,0c0.4,0.4,0.6,0.9,0.8,1.4c0,0,0,0,0,0C15,6.8,15.6,7.1,16.1,7c0.5-0.1,0.9-0.7,0.7-1.2c-0.2-0.9-0.7-1.7-1.3-2.3C14.6,2.5,13.3,2,12,2C9.2,2,7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M13.1,15.5c0,0-0.1,0.1-0.1,0.1V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.4c-0.6-0.6-0.7-1.5-0.1-2.1c0.6-0.6,1.5-0.7,2.1-0.1C13.6,13.9,13.7,14.9,13.1,15.5z" />
    </svg>
  );
};

export default UisLockOpenAlt;