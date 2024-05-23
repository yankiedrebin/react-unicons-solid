import React from 'react';
import { Icon } from '../icon';

const UisMicroscope: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M20,21h-5.2c0.1-0.2,0.1-0.4,0.1-0.6c3-1.2,5-4.1,5-7.4c0-2-0.8-3.9-2.1-5.4l0.6-0.6c0.1-0.1,0.2-0.2,0.2-0.4l0.7-2.1c0.1-0.4,0-0.8-0.2-1l-2.1-2.1c-0.3-0.3-0.7-0.4-1-0.2L14,1.8c-0.1,0-0.3,0.1-0.4,0.2L7.2,8.4c-0.4,0.4-0.4,1,0,1.4l0,0l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4l0,0l2.1,2.1c0.4,0.4,1,0.4,1.4,0l1.4-1.4l0,0c0.4,0.4,1,0.4,1.4,0l0,0L16.5,9c1,1.1,1.5,2.5,1.5,4c0,2.3-1.4,4.4-3.5,5.4c-0.9-1.4-2.7-1.9-4.1-1c-0.4,0.3-0.8,0.6-1,1.1c-0.4-0.2-0.8-0.3-1.1-0.6C8.7,17.8,9,17.4,9,17c0-0.6-0.4-1-1-1H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.3c1,1.1,2.3,2,3.7,2.5c0,0.2,0.1,0.4,0.1,0.5H4c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1C21,21.5,20.6,21,20,21z M8.6,12.6l-0.7-0.7l0.7-0.7l0.7,0.7L8.6,12.6z M12,21c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1C13,20.6,12.6,21,12,21z" />
    </svg>
  );
};

export default UisMicroscope;