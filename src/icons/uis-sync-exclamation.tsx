import React from 'react';

const UisSyncExclamation: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,13L12,13c0.6,0,1-0.4,1-1V9c0-0.6-0.4-1-1-1s-1,0.4-1,1v3C11,12.6,11.4,13,12,13z M11,15c0,0.5,0.5,1,1,1c0,0,0,0,0,0c0.5,0,1-0.5,1-1c0-0.3-0.1-0.5-0.3-0.7c-0.3-0.3-0.7-0.4-1.1-0.2c-0.1,0-0.2,0.1-0.3,0.2C11.1,14.5,11,14.7,11,15C11,15,11,15,11,15z M17,3.3C13.1,1.1,8.3,1.8,5.1,4.7V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4.5c0,0.1,0,0.2,0.1,0.3c0,0,0,0.1,0,0.1c0.1,0.2,0.3,0.4,0.5,0.5c0,0,0,0,0,0C3.9,8.5,4,8.5,4.1,8.5h4.5c0.6,0,1-0.4,1-1s-0.4-1-1-1H6.2C7.7,4.9,9.8,4,12,4c4.4,0,8,3.6,8,8v0c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1C22,8.4,20.1,5.1,17,3.3z M19.9,15.5h-4.5c-0.6,0-1,0.4-1,1s0.4,1,1,1h2.4C16.3,19.1,14.2,20,12,20c-4.4,0-8-3.6-8-8c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,5.5,4.5,10,10,10c2.6,0,5-1,6.9-2.8V21c0,0.6,0.4,1,1,1h0c0.6,0,1-0.4,1-1v-4.5C20.9,15.9,20.4,15.5,19.9,15.5z" />
    </svg>
  );
};

export default UisSyncExclamation;