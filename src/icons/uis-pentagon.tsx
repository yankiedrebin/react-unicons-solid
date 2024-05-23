import React from 'react';

const UisPentagon: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M21.6,9.2l-9-6.5c-0.4-0.3-0.8-0.3-1.2,0l-9,6.5C2.1,9.4,1.9,9.9,2,10.3l3.4,10.6c0.1,0.4,0.5,0.7,1,0.7h11.1c0.4,0,0.8-0.3,1-0.7L22,10.3C22.1,9.9,21.9,9.4,21.6,9.2z" />
    </svg>
  );
};

export default UisPentagon;