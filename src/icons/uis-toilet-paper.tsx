import React from 'react';

const UisToiletPaper: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M22.3,20.4c-1.2-1.4-1.8-3.1-1.8-4.9V8c0-3.3-2.2-6-5-6h-9c-2.8,0-5,2.7-5,6s2.2,6,5,6h3v1.5c0,2.3,0.8,4.5,2.2,6.2c0.2,0.2,0.5,0.3,0.8,0.3h9c0.6,0,1-0.4,1-1C22.5,20.8,22.4,20.5,22.3,20.4z M6.5,9.2C5.9,9.2,5.4,8.6,5.5,8c-0.1-0.6,0.4-1.2,1-1.2c0.6,0.1,1.1,0.6,1,1.2C7.6,8.6,7.1,9.2,6.5,9.2z M13,20c-1-1.3-1.5-2.9-1.5-4.6v-7c0,0,0-0.1,0-0.1c0-0.1,0-0.3,0-0.4c0-1.4-0.4-2.8-1.3-4h5.3c1.7,0,3,1.8,3,4v7.5c0,1.6,0.4,3.2,1.1,4.6H13z" />
    </svg>
  );
};

export default UisToiletPaper;