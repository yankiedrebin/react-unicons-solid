import React from 'react';

const UisStethoscope: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21.8,10c-0.4-1.2-1.6-2-2.8-2c-1.7,0-3,1.3-3,3c0,1.3,0.8,2.4,2,2.8v1.7c0,2.5-2,4.5-4.5,4.5S9,18,9,15.5v-0.6c2.9-0.5,5-3,5-5.9V3c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h1v5c0,2.2-1.8,4-4,4s-4-1.8-4-4V4h1c0.6,0,1-0.4,1-1S5.6,2,5,2H3C2.4,2,2,2.4,2,3v6c0,2.9,2.1,5.4,5,5.9v0.6c0,3.6,2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5v-1.7C21.6,13.3,22.4,11.6,21.8,10z" />
    </svg>
  );
};

export default UisStethoscope;