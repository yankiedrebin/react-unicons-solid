import React from 'react';
import { Icon } from '../icon';

const UisObjectUngroup: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,18.3v-6.6c0.6-0.3,1-1,1-1.7c0-1.1-0.9-2-2-2c-0.7,0-1.4,0.4-1.7,1H15V5.7c0.6-0.3,1-1,1-1.7c0-1.1-0.9-2-2-2c-0.7,0-1.4,0.4-1.7,1H5.7C5.4,2.4,4.7,2,4,2C2.9,2,2,2.9,2,4c0,0.7,0.4,1.4,1,1.7v6.6c-0.6,0.3-1,1-1,1.7c0,1.1,0.9,2,2,2c0.7,0,1.4-0.4,1.7-1H9v3.3c-0.6,0.3-1,1-1,1.7c0,1.1,0.9,2,2,2c0.7,0,1.4-0.4,1.7-1h6.6c0.3,0.6,1,1,1.7,1c1.1,0,2-0.9,2-2C22,19.3,21.6,18.6,21,18.3z M5.7,13c-0.2-0.3-0.4-0.5-0.7-0.7V5.7C5.3,5.5,5.5,5.3,5.7,5h6.6c0.2,0.3,0.4,0.5,0.7,0.7V9h-1.3c-0.3-0.6-1-1-1.7-1c-1.1,0-2,0.9-2,2c0,0.7,0.4,1.4,1,1.7V13H5.7z M13,12.3c-0.3,0.2-0.5,0.4-0.7,0.7H11v-1.3c0.3-0.2,0.5-0.4,0.7-0.7H13V12.3z M12.3,15c0.3,0.6,1,1,1.7,1c1.1,0,2-0.9,2-2c0-0.7-0.4-1.4-1-1.7V11h3.3c0.2,0.3,0.4,0.5,0.7,0.7v6.6c-0.3,0.2-0.5,0.4-0.7,0.7h-6.6c-0.2-0.3-0.4-0.5-0.7-0.7V15H12.3z" />
    </svg>
  );
};

export default UisObjectUngroup;