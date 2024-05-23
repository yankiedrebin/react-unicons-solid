import React from 'react';

const UisSignalAlt3: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M6,15H2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1v-6C7,15.4,6.6,15,6,15z M14,9h-4c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1V10C15,9.4,14.6,9,14,9z M22,1h-4c-0.6,0-1,0.4-1,1v20c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1V2C23,1.4,22.6,1,22,1z" />
    </svg>
  );
};

export default UisSignalAlt3;