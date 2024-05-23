import React from 'react';

const UisRocket: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M22.6,2.1c-0.1-0.3-0.4-0.6-0.7-0.7C17.7,0.3,13.4,1.6,10.5,5L9.4,6.3L6.7,5.7C5.4,5.2,4,5.8,3.4,7l-2.2,3.9c-0.2,0.3-0.2,0.6,0,0.9c0.1,0.3,0.4,0.5,0.7,0.6l3.1,0.7c-0.3,0.8-0.4,1.6-0.6,2.4c0,0.3,0.1,0.6,0.3,0.8l3.1,3.1c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0.1,0,0.1,0c0.9-0.1,1.7-0.2,2.5-0.5l0.6,3c0.1,0.3,0.3,0.6,0.6,0.7c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.5-0.1l3.9-2.2c1.1-0.6,1.7-2,1.4-3.3l-0.7-2.8l1.2-1.1C22.3,10.7,23.7,6.2,22.6,2.1z M7.3,8.8c-0.6,0.8-1.2,1.6-1.6,2.4l-2.1-0.5L5.1,8c0.2-0.4,0.6-0.5,1.1-0.4L7.9,8L7.3,8.8z M16,18.9l-2.7,1.5l-0.4-2c0.9-0.4,1.7-1,2.4-1.6l0.7-0.7l0.4,1.7C16.6,18.3,16.3,18.8,16,18.9z M16.7,8.8c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5C18.2,8.1,17.6,8.8,16.7,8.8z" />
    </svg>
  );
};

export default UisRocket;