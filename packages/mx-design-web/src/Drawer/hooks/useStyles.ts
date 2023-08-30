import { useMemo } from 'react';
import type { DrawerProps } from '../interface';

interface getStyleProps {
  style: DrawerProps['style'];
  themeStyle: DrawerProps['themeStyle'];
}
export function useStyles(props: getStyleProps) {
  const { style, themeStyle } = props;

  return useMemo(
    () => ({
      wrapperStyle: { ...style, ...themeStyle } as Record<string, any>,
    }),
    [style, themeStyle]
  );
}
