import { useMemo } from 'react';
import type { AlertProps } from '../interface';

interface getStyleProps {
  style: AlertProps['style'];
  themeStyle: AlertProps['themeStyle'];
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
