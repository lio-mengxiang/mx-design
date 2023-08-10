import React, { ReactNode } from 'react';
import { cs } from '@mx-design/web-utils';
import { Button } from '../Button';
import { IconClose } from '../Icon';
import { useLocale } from '../locale/useLocal/useLocal';
import { MODAL_NAMESPACE } from './constants';
// type
import type { ModalProps } from './interface';

export interface ModalCardProps
  extends Pick<
    ModalProps,
    | 'withoutPadding'
    | 'content'
    | 'title'
    | 'withoutLine'
    | 'okLoading'
    | 'hideCancel'
    | 'closable'
    | 'closeElement'
    | 'okButtonProps'
    | 'cancelButtonProps'
    | 'footer'
    | 'footerAlign'
    | 'onCancel'
    | 'onOk'
    | 'okText'
    | 'cancelText'
    | 'type'
  > {
  prefixCls: string;
  normalIcon: ReactNode;
}

export function Footer(props: ModalCardProps) {
  // props
  const {
    withoutPadding,
    title,
    withoutLine,
    okLoading,
    hideCancel,
    closable,
    closeElement,
    okButtonProps,
    cancelButtonProps,
    footer,
    footerAlign,
    onCancel,
    onOk,
    prefixCls,
    normalIcon,
    okText,
    cancelText,
    content,
    type,
  } = props;

  const [locale] = useLocale({ namespace: MODAL_NAMESPACE });

  return (
    <>
      {title && (
        <div
          className={cs(`${prefixCls}-title-container`, {
            [`${prefixCls}-title-border`]: !withoutLine,
            [`${prefixCls}-title-closable`]: closable,
          })}
        >
          <div className={`${prefixCls}-title`}>
            {normalIcon && <span className={cs(`${prefixCls}-title-icon`, `${prefixCls}-${type}-title-icon`)}>{normalIcon}</span>}
            <span className={`${prefixCls}-title-name`}>{title}</span>
          </div>
          {closable && (
            <>
              {closeElement || (
                <div className={`${prefixCls}-icon`} onClick={onCancel}>
                  <IconClose />
                </div>
              )}
            </>
          )}
        </div>
      )}
      <>
        {content && (
          <div
            className={cs(`${prefixCls}-content`, {
              [`${prefixCls}-content-no-padding`]: withoutPadding,
              [`${prefixCls}-content-border`]: !withoutLine,
            })}
          >
            {content}
          </div>
        )}
      </>
      {footer !== undefined ? (
        footer
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

export default Footer;
