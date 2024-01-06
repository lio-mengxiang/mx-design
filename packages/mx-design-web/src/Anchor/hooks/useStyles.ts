import { useMemo } from 'react';
import type { AnchorProps } from '../interface';

interface getStyleProps {
  style: AnchorProps['style'];
  themeStyle: AnchorProps['themeStyle'];
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
