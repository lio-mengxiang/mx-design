import { useMemo } from 'react';
import type { SpinProps } from '../interface';

interface getStyleProps {
  style: SpinProps['style'];
  themeStyle: SpinProps['themeStyle'];
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
