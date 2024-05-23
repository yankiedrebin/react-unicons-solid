import React from 'react';

const UisHeadSideCough: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M6,16c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S6.6,16,6,16z M2,17c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S2.6,17,2,17z M5,20c-0.6,0-1,0.4-1,1s0.4,1,1,1s1-0.4,1-1S5.6,20,5,20z M16.2,2C12.2,1.9,9,4.9,8.9,8.9c0,0.1,0,0.1,0,0.2v0l-1.8,3.8c-0.2,0.5,0,1.1,0.5,1.3c0.1,0.1,0.3,0.1,0.4,0.1h0.9v1.8c0,1.1,0.9,1.9,1.9,1.9h0.9v1.8c0,0.6,0.4,1,1,1h0c0.6,0,8,0,8.4,0c0.1,0,0.2,0,0.3,0c0.5-0.2,0.8-0.7,0.7-1.2l-0.9-3L23,9.8c0-0.1,0-0.2,0-0.3V9.3C23,5.4,20,2.2,16.2,2z" />
    </svg>
  );
};

export default UisHeadSideCough;