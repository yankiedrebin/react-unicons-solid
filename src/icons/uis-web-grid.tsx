import React from 'react';
import { Icon } from '../icon';

const UisWebGrid: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2h-5v20h5c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M2,21c0,0.6,0.4,1,1,1h11v-9H2V21z M2,3v8h12V2H3C2.4,2,2,2.4,2,3z" />
    </svg>
  );
};

export default UisWebGrid;