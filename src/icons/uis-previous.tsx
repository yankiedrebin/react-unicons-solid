import React from 'react';

const UisPrevious: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M16.7,15.3L13.4,12l3.3-3.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-4,4c0,0,0,0,0,0c-0.4,0.4-0.4,1,0,1.4l4,4c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C17.1,16.3,17.1,15.7,16.7,15.3z M8,7C7.4,7,7,7.4,7,8v8c0,0.6,0.4,1,1,1s1-0.4,1-1V8C9,7.4,8.6,7,8,7z" />
    </svg>
  );
};

export default UisPrevious;