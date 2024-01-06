import { useMemo } from 'react';
import type { SwitchProps } from '../interface';

interface getStyleProps {
  style: SwitchProps['style'];
  themeStyle: SwitchProps['themeStyle'];
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
