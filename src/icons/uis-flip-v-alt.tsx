import React from 'react';
import { Icon } from '../icon';

const UisFlipVAlt: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M4.9,12.2c-0.5-0.1-1.1,0.2-1.2,0.7l-0.5,1.9C3.1,15.4,3.4,16,4,16.1c0.1,0,0.2,0,0.2,0c0.5,0,0.9-0.3,1-0.8l0.5-1.9C5.8,12.9,5.5,12.4,4.9,12.2z M7.5,5h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1S7,5,7.5,5z M4.2,19c0-0.5-0.3-0.9-0.8-1c-0.5-0.1-1.1,0.2-1.2,0.7l-0.2,1c0,0.1,0,0.2,0,0.2c0,0.6,0.4,1,1,1h1c0.5,0,0.9-0.3,1-0.8C5.1,19.7,4.8,19.2,4.2,19z M6.4,6.4C5.9,6.3,5.3,6.6,5.2,7.1L4.7,9.1c0,0.1,0,0.2,0,0.2c0,0.6,0.4,1,1,1c0.5,0,0.9-0.3,1-0.8l0.5-1.9C7.3,7.1,6.9,6.6,6.4,6.4z M10,12.5c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-2C11,13,10.6,12.5,10,12.5z M10,6.5c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-2C11,7,10.6,6.5,10,6.5z M10.5,18.6C10,18.4,9.4,18.5,9.1,19H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1v-0.5C11,19.2,10.8,18.8,10.5,18.6z M22,19.8l-4-16C17.9,3.3,17.5,3,17,3h-3c-0.6,0-1,0.4-1,1v16c0,0.6,0.4,1,1,1h7c0.1,0,0.2,0,0.2,0C21.8,20.8,22.1,20.3,22,19.8z" />
    </svg>
  );
};

export default UisFlipVAlt;