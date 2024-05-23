import type React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: number | string;
}

export type Icon = React.FC<IconProps>;
