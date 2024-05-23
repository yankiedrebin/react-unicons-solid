import React from 'react';

const UisAt: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3c0.5-0.3,0.6-0.9,0.4-1.4c-0.3-0.5-0.9-0.6-1.4-0.4c0,0,0,0,0,0c-3.8,2.2-8.7,0.9-10.9-2.9C2.9,12.2,4.2,7.3,8,5.1c3.8-2.2,8.7-0.9,10.9,2.9c0.7,1.2,1.1,2.6,1.1,4v0.8c0,1-0.8,1.8-1.8,1.8s-1.8-0.8-1.8-1.8V8.5c0-0.6-0.4-1-1-1c-0.5,0-0.9,0.3-1,0.8c-2-1.4-4.9-0.9-6.3,1.1c-1.4,2-0.9,4.9,1.1,6.3c1.9,1.3,4.4,1,5.9-0.7c1.3,1.6,3.6,1.9,5.2,0.7c0.9-0.7,1.5-1.8,1.5-3V12C22,6.5,17.5,2,12,2z M12,14.5c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5C14.5,13.4,13.4,14.5,12,14.5z" />
    </svg>
  );
};

export default UisAt;