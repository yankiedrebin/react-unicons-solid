import React from 'react';

const UisKeyholeSquare: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M13.7,11c-0.2,0.3-0.4,0.6-0.7,0.7V15c0,0.6-0.4,1-1,1s-1-0.4-1-1v-3.3c-1-0.6-1.3-1.8-0.7-2.7S12,7.7,13,8.3C14,8.8,14.3,10,13.7,11z" />
    </svg>
  );
};

export default UisKeyholeSquare;