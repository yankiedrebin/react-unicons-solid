import React from 'react';

const UisRecordAudio: React.FC<React.SVGAttributes<SVGElement> & { color?: string; size?: number | string }> = ({
  color = 'currentColor',
  size = '24',
  ...otherProps
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6C18,15.3,15.3,18,12,18z" />
    </svg>
  );
};

export default UisRecordAudio;