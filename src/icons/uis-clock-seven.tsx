import React from 'react';
import { Icon } from '../icon';

const UisClockSeven: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13,12c0,0.2-0.1,0.3-0.1,0.4l-1.5,2.8c-0.3,0.5-0.9,0.7-1.4,0.4c-0.5-0.3-0.7-0.9-0.4-1.4l1.4-2.6V7c0-0.6,0.4-1,1-1s1,0.4,1,1V12z" />
    </svg>
  );
};

export default UisClockSeven;