import React from 'react';

const UisBag: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M19,6h-3V5c0-1.1-0.9-2-2-2h-4C8.9,3,8,3.9,8,5v1H5C3.3,6,2,7.3,2,9v9c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V9C22,7.3,20.7,6,19,6z M10,5h4v1h-4V5z M20,18c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1v-5.6l4.7,1.6C8.8,14,8.9,14,9,14h6c0.1,0,0.2,0,0.3-0.1l4.7-1.6V18z" />
    </svg>
  );
};

export default UisBag;