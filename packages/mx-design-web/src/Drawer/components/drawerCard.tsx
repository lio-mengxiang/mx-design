import React from 'react';
import { cs } from '@mx-design/web-utils';
import { Footer } from './footer';
import { IconClose } from '../../Icon';
import { useCardClassNames } from '../hooks';
import { IconHover } from '../../Common';
// type
import type { DrawerProps } from '../interface';

export interface DrawerCardProps
  extends Pick<
    DrawerProps,
    | 'content'
    | 'title'
    | 'okLoading'
    | 'hideCancelBtn'
    | 'showCloseIcon'
    | 'okButtonProps'
    | 'cancelButtonProps'
    | 'footer'
    | 'footerAlign'
    | 'onCancel'
    | 'onOk'
    | 'okText'
    | 'cancelText'
    | 'headerStyle'
    | 'closeIcon'
    | 'bodyStyle'
  > {
  prefixCls: string;
}

export function DrawerCard(props: DrawerCardProps) {
  // props
  const {
    prefixCls,
    showCloseIcon,
    title,
    headerStyle,
    closeIcon,
    bodyStyle,
    footer,
    footerAlign,
    content,
    okLoading,
    hideCancelBtn,
    okButtonProps,
    cancelButtonProps,
    onCancel,
    onOk,
    okText,
    cancelText,
  } = props;

  const { contentCls, iconCls, scrollCls, headerCls, titleCls, titleNameCls } = useCardClassNames({ prefixCls });

  return (
    <div className={scrollCls}>
      {title !== null && (
        <div className={headerCls} style={headerStyle}>
          <div className={titleCls}>
            <span className={titleNameCls}>{title}</span>
          </div>
          {showCloseIcon && (
            <>
              {closeIcon || (
                <IconHover className={iconCls} onClick={onCancel}>
                  <IconClose />
                </IconHover>
              )}
            </>
          )}
        </div>
      )}
      <div style={bodyStyle} className={contentCls}>
        {content}
      </div>
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
    </div>
  );
}
