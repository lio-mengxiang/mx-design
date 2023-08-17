import { cs } from '@mx-design/web-utils';
import { useMemo } from 'react';
// type
import type { ModalProps } from '../interface';

interface getClassNamesProps {
  prefixCls: string;
  withoutLine: ModalProps['withoutLine'];
  closable: ModalProps['closable'];
  withoutPadding: ModalProps['withoutPadding'];
}

export function useCardClassNames(props: getClassNamesProps) {
  const { prefixCls, withoutLine, closable, withoutPadding } = props;

  return useMemo(
    () => ({
      cardContainerCls: cs(`${prefixCls}-title-container`, {
        [`${prefixCls}-title-border`]: !withoutLine,
        [`${prefixCls}-title-closable`]: closable,
      }),
      iconCls: `${prefixCls}-icon`,
      contentCls: cs(`${prefixCls}-content`, {
        [`${prefixCls}-content-no-padding`]: withoutPadding,
        [`${prefixCls}-content-border`]: !withoutLine,
      }),
    }),
    [closable, prefixCls, withoutLine, withoutPadding]
  );
}
