import React from 'react';

const UisClockFive: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M14,15.7c-0.5,0.3-1.1,0.1-1.4-0.4l-1.5-2.8C11,12.3,11,12.2,11,12V7c0-0.6,0.4-1,1-1s1,0.4,1,1v4.7l1.4,2.6C14.6,14.8,14.5,15.4,14,15.7z" />
    </svg>
  );
};

export default UisClockFive;