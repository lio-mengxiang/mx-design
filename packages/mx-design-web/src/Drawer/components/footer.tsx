import React from 'react';
import { cs } from '@mx-design/web-utils';
import { Button } from '../../Button';
import { useLocale } from '../../locale/useLocal/useLocal';
import { DRAWER_NAMESPACE } from '../constants';
// type
import type { DrawerProps } from '../interface';

export interface FooterProps
  extends Pick<
    DrawerProps,
    | 'okLoading'
    | 'hideCancelBtn'
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
  const { okLoading, hideCancelBtn, okButtonProps, cancelButtonProps, footer, footerAlign, onCancel, onOk, prefixCls, okText, cancelText } =
    props;

  const [locale] = useLocale({ namespace: DRAWER_NAMESPACE });

  return (
    <>
      {footer !== undefined ? (
        <div className={cs(`${prefixCls}-footer`, `${prefixCls}-footer-align-${footerAlign}`)}>{footer}</div>
      ) : (
        <div className={cs(`${prefixCls}-footer`, `${prefixCls}-footer-align-${footerAlign}`)}>
          {!hideCancelBtn && (
            <Button status="default" className={`${prefixCls}-btn`} onClick={onCancel} {...cancelButtonProps}>
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
