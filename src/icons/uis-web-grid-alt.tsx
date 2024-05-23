import React from 'react';
import { Icon } from '../icon';

const UisWebGridAlt: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2H3C2.4,2,2,2.4,2,3v5h20V3C22,2.4,21.6,2,21,2z M2,21c0,0.6,0.4,1,1,1h8V10H2V21z M13,22h8c0.6,0,1-0.4,1-1V10h-9V22z" />
    </svg>
  );
};

export default UisWebGridAlt;