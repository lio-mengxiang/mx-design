import { useMemo } from 'react';
import type { CheckboxProps } from '../interface';

interface getStyleProps {
  style: CheckboxProps['style'];
  themeStyle: CheckboxProps['themeStyle'];
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
