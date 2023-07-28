import { useMemo } from 'react';
import type { NotificationCardProps } from '../interface';

interface getStyleProps {
  style: NotificationCardProps['style'];
  themeStyle: NotificationCardProps['themeStyle'];
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
