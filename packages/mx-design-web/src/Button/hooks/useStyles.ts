import { useMemo } from 'react';
import type { ButtonProps } from '../interface';

interface getStyleProps {
  style: ButtonProps['style'];
  themeStyle: ButtonProps['themeStyle'];
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
