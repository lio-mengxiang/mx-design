import { useMemo } from 'react';

interface getStyleProps<T extends Record<string, any>> {
  style: T['style'];
  themeStyle: T['themeStyle'];
}
export function useStyles<T>(props: getStyleProps<T>) {
  const { style, themeStyle } = props;

  return useMemo(
    () => ({
      wrapperStyle: { ...style, ...themeStyle } as Record<string, any>,
    }),
    [style, themeStyle]
  );
}
