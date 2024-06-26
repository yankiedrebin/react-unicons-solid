import React from 'react';
import { Icon } from '../icon';

const UisArrowDownRight: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M17,6c-0.6,0-1,0.4-1,1v7.6L7.7,6.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l8.3,8.3H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1V7C18,6.4,17.6,6,17,6z" />
    </svg>
  );
};

export default UisArrowDownRight;