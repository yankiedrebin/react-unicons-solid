import React from 'react';
import { Icon } from '../icon';

const UisAlignLeftJustify: Icon = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,15H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,15,21,15z M15,19H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h12c0.6,0,1-0.4,1-1S15.6,19,15,19z M3,5h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,3,2,3.4,2,4S2.4,5,3,5z M21,7H3C2.4,7,2,7.4,2,8s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,7,21,7z M21,11H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,11,21,11z" />
    </svg>
  );
};

export default UisAlignLeftJustify;