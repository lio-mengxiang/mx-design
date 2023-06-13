import React from 'react';

type baseIconProps = {
  /**
   * @zh icon的大小, 单位 "em,px"
   * @en icon size
   */
  size?: string | string[];
  /**
   * Default props automatically passed to the component; overwriteable
   */
  style?: React.CSSProperties;
  /**
   * The icon `svg` fill color
   * @default "none"
   */
  className?: string;
  spin?: boolean;
};

export type IconProps = baseIconProps & Omit<React.SVGAttributes<SVGElement>, keyof baseIconProps>;
