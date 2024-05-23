import React from 'react';

const UisAngleUp: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M16.9,13.4l-4.2-4.2l0,0c-0.4-0.4-1-0.4-1.4,0l-4.2,4.2c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l3.5-3.5l3.5,3.5c0.2,0.2,0.4,0.3,0.7,0.3l0,0c0.3,0,0.5-0.1,0.7-0.3C17.3,14.4,17.3,13.8,16.9,13.4z" />
    </svg>
  );
};

export default UisAngleUp;