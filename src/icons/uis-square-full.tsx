import React from 'react';

const UisSquareFull: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21,2H3C2.4,2,2,2.4,2,3v18c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V3C22,2.4,21.6,2,21,2z M20,20H4V4h16V20z" />
    </svg>
  );
};

export default UisSquareFull;