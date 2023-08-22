import React, { ReactNode } from 'react';
import { cs } from '@mx-design/web-utils';
import { Footer } from './footer';
import { IconClose } from '../../Icon';
// type
import type { ModalProps } from '../interface';
import { useCardClassNames } from '../hooks';
import { IconHover } from '../../Common';

export interface ModalCardProps
  extends Pick<
    ModalProps,
    | 'withoutPadding'
    | 'content'
    | 'title'
    | 'withoutLine'
    | 'okLoading'
    | 'hideCancelBtn'
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

export function ModalCard(props: ModalCardProps) {
  // props
  const {
    withoutPadding,
    title,
    withoutLine,
    okLoading,
    hideCancelBtn,
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

  const { cardContainerCls, iconCls, contentCls } = useCardClassNames({ prefixCls, withoutLine, closable, withoutPadding });

  return (
    <>
      {title && (
        <div className={cardContainerCls}>
          <div className={`${prefixCls}-title`}>
            {normalIcon && <span className={cs(`${prefixCls}-title-icon`, `${prefixCls}-${type}-title-icon`)}>{normalIcon}</span>}
            <span className={`${prefixCls}-title-name`}>{title}</span>
          </div>
          {closable && (
            <>
              {closeElement || (
                <IconHover className={iconCls} onClick={onCancel}>
                  <IconClose />
                </IconHover>
              )}
            </>
          )}
        </div>
      )}
      <>{content && <div className={contentCls}>{content}</div>}</>
      {footer !== null && (
        <Footer
          okLoading={okLoading}
          hideCancelBtn={hideCancelBtn}
          okButtonProps={okButtonProps}
          cancelButtonProps={cancelButtonProps}
          footer={footer}
          footerAlign={footerAlign}
          onCancel={onCancel}
          onOk={onOk}
          prefixCls={prefixCls}
          okText={okText}
          cancelText={cancelText}
        />
      )}
    </>
  );
}

export default ModalCard;
