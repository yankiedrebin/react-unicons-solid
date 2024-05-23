import React from 'react';

const UisClockTen: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M13,12c0,0.6-0.4,1-1,1c-0.2,0-0.3,0-0.5-0.1l-2.6-1.5c-0.5-0.3-0.6-0.9-0.4-1.4c0.3-0.5,0.9-0.6,1.4-0.4l1.1,0.6V7c0-0.6,0.4-1,1-1s1,0.4,1,1V12z" />
    </svg>
  );
};

export default UisClockTen;