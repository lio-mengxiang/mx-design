import { useMemo } from 'react';
import type { ModalProps } from '../interface';

interface getStyleProps {
  style: ModalProps['style'];
  themeStyle: ModalProps['themeStyle'];
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
