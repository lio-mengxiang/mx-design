import { useMemo } from 'react';
import type { RadioProps } from '../interface';

interface getStyleProps {
  style: RadioProps['style'];
  themeStyle: RadioProps['themeStyle'];
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
