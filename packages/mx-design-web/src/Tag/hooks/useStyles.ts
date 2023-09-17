import { useMemo } from 'react';
import type { TagProps } from '../interface';

interface getStyleProps {
  style: TagProps['style'];
  themeStyle: TagProps['themeStyle'];
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
