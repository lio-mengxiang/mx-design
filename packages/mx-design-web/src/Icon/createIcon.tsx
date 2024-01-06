// thx chakra ui
import React, { forwardRef } from 'react';
import { Icon } from './icon';
// type
import type { IconProps } from './interface';

interface CreateIconOptions {
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  paths: React.ReactNode;
  /**
   * Default props automatically passed to the component; overwriteable
   */
  iconProps?: IconProps;
  viewBox?: string;
  fill?: string;
}

export function createIcon(options: CreateIconOptions) {
  const { paths, iconProps = {}, viewBox = '0 0 1024 1024' } = options;

  return forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Icon ref={ref} viewBox={viewBox} {...iconProps} {...props}>
      {paths}
    </Icon>
  ));
}
