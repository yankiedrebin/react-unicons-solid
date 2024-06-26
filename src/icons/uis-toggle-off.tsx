import React from 'react';
import { Icon } from '../icon';

const UisToggleOff: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M16.5,6.5h-9C4.5,6.5,2,9,2,12s2.5,5.5,5.5,5.5h9c3,0,5.5-2.5,5.5-5.5S19.5,6.5,16.5,6.5z M7.5,14.5C6.1,14.5,5,13.4,5,12s1.1-2.5,2.5-2.5S10,10.6,10,12S8.9,14.5,7.5,14.5z" />
    </svg>
  );
};

export default UisToggleOff;