import React from 'react';

const UisAngleRight: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M9.9,17.2c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7l3.5-3.5L9.2,8.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l4.2,4.2c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-4.2,4.2C10.4,17.1,10.1,17.2,9.9,17.2z" />
    </svg>
  );
};

export default UisAngleRight;