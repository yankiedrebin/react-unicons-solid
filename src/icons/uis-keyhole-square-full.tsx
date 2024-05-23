import React from 'react';
import { Icon } from '../icon';

const UisKeyholeSquareFull: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2H3C2.4,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M13.7,11c-0.2,0.3-0.4,0.6-0.7,0.7V15c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3.3c-1-0.6-1.3-1.8-0.7-2.7S12,7.7,13,8.3C14,8.8,14.3,10,13.7,11z" />
    </svg>
  );
};

export default UisKeyholeSquareFull;