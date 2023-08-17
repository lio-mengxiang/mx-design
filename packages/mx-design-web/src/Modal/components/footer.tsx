import React from 'react';
import { cs } from '@mx-design/web-utils';
import { Button } from '../../Button';
import { useLocale } from '../../locale/useLocal/useLocal';
import { MODAL_NAMESPACE } from '../constants';
// type
import type { ModalProps } from '../interface';

export interface FooterProps
  extends Pick<
    ModalProps,
    | 'okLoading'
    | 'hideCancel'
    | 'okButtonProps'
    | 'cancelButtonProps'
    | 'footer'
    | 'footerAlign'
    | 'onCancel'
    | 'onOk'
    | 'okText'
    | 'cancelText'
  > {
  prefixCls: string;
}

export function Footer(props: FooterProps) {
  // props
  const { okLoading, hideCancel, okButtonProps, cancelButtonProps, footer, footerAlign, onCancel, onOk, prefixCls, okText, cancelText } =
    props;

  const [locale] = useLocale({ namespace: MODAL_NAMESPACE });

  return (
    <>
      {footer !== undefined ? (
        <div className={cs(`${prefixCls}-footer`, `${prefixCls}-footer-align-${footerAlign}`)}>{footer}</div>
      ) : (
        <div className={cs(`${prefixCls}-footer`, `${prefixCls}-footer-align-${footerAlign}`)}>
          {!hideCancel && (
            <Button className={`${prefixCls}-btn`} onClick={onCancel} {...cancelButtonProps}>
              {cancelText || locale.CANCEL_TEXT}
            </Button>
          )}
          <Button loading={okLoading} onClick={onOk} {...okButtonProps}>
            {okText || locale.OK_TEXT}
          </Button>
        </div>
      )}
    </>
  );
}
