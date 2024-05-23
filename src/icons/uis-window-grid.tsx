import React from 'react';

const UisWindowGrid: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M2,3v18c0,0.6,0.4,1,1,1h5V2H3C2.4,2,2,2.4,2,3z M21,2H10v9h12V3C22,2.4,21.6,2,21,2z M10,22h11c0.6,0,1-0.4,1-1v-8H10V22z" />
    </svg>
  );
};

export default UisWindowGrid;