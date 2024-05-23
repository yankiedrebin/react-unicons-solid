import React from 'react';
import { Icon } from '../icon';

const UisCircleLayer: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M7,12c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S9.8,12,7,12z M11,7c-2.4,0-4.6,1.5-5.5,3.7c3.5-0.9,7,1.3,7.8,4.7c0.3,1,0.3,2.1,0,3.1c3.1-1.3,4.5-4.8,3.2-7.8C15.6,8.5,13.4,7,11,7z M21.2,5.8C20.1,3.5,17.6,2,15,2S9.9,3.5,8.8,5.8c4-1.2,8.2,1,9.4,4.9c0.5,1.5,0.5,3,0,4.5C21.6,13.5,23,9.3,21.2,5.8z" />
    </svg>
  );
};

export default UisCircleLayer;