import { useMemo } from 'react';
import type { EmptyProps } from '../interface';

interface getStyleProps {
  style: EmptyProps['style'];
  themeStyle: EmptyProps['themeStyle'];
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
