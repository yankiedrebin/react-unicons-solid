import React from 'react';
import { Icon } from '../icon';

const UisStoreSlash: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M15,10.6c0.8,0.9,1.8,1.4,3,1.4v1.8l2,2v-4.3c1.2-0.7,2-2,2-3.4c0-0.1,0-0.3-0.1-0.4l-2-5C19.8,2.2,19.4,2,19,2H6.2L15,10.6C14.9,10.7,15,10.6,15,10.6z M22.7,21.3L20,18.6v0l-2-2v0l-4.8-4.8l0,0L4.1,2.6l0,0L2.7,1.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l2,2l-1.2,3C2,7.7,2,7.9,2,8c0,1.4,0.8,2.7,2,3.4V21c0,0.6,0.4,1,1,1h14c0.4,0,0.8-0.3,0.9-0.7l1.4,1.4c0.4,0.4,1,0.4,1.4,0C23.1,22.3,23.1,21.7,22.7,21.3z M10,14c-0.6,0-1,0.4-1,1v5H6v-8c1.2,0,2.2-0.5,3-1.4c0.3,0.3,0.6,0.6,1,0.8l2.6,2.6H10z M18,20h-3v-3.6l3,3V20z" />
    </svg>
  );
};

export default UisStoreSlash;