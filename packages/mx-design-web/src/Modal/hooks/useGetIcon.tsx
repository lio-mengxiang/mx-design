import React, { useMemo } from 'react';
import { IconPromptFilling, IconDeleteFilling, IconWarningFilling, IconSuccessFilling } from '../../Icon';
// type
import type { ModalProps } from '../interface';

interface GetIconProps {
  type: ModalProps['type'];
  title: ModalProps['title'];
}

export function useGetIcon(props: GetIconProps) {
  const { type, title } = props;
  return useMemo(() => {
    if (type && title) {
      switch (type) {
        case 'info':
          return <IconPromptFilling />;
        case 'error':
          return <IconDeleteFilling />;
        case 'success':
          return <IconSuccessFilling />;
        case 'warning':
          return <IconWarningFilling />;
        default:
          return null;
      }
    } else {
      return null;
    }
  }, [title, type]);
}
