import { AnimatePresence, motion } from 'framer-motion';
import React, { forwardRef, ReactNode, useContext, useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useMergeProps } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { ConfigContext } from '../ConfigProvider';
import { maskAnimation, modalAnimation } from './constants';
import { useGetIcon, useOverflowHidden } from './hooks';
import ModalCard from './modalCard';
import { Portal } from '../Portal';
// type
import type { ModalProps } from './interface';
import type { IModalRef } from './modalProvider';

type IModalProps = ModalProps & IModalRef['remove'];

const defaultProps: Partial<IModalProps> = {
  mask: true,
  withoutLine: false,
  maskClosable: true,
  footer: true,
  footerAlign: 'right',
  focusLock: true,
  autoFocus: false,
  closable: true,
  getMountContainer: () => document.body,
};

export function Modal(baseProps: ModalProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Modal);

  const {
    withoutPadding,
    visible,
    type,
    mask,
    title,
    withoutLine,
    okLoading,
    maskClosable,
    maskStyle,
    hideCancel,
    closable,
    closeElement,
    okText,
    cancelText,
    okButtonProps,
    cancelButtonProps,
    footer,
    footerAlign,
    focusLock,
    autoFocus,
    getMountContainer,
    onCancel,
    onOk,
    afterClose,
    afterOpen,
    content,
  } = props;

  const prefixCls = getPrefixCls('modal');
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const normalIcon: ReactNode = useGetIcon({ title, type });
  useOverflowHidden(getMountContainer, visible && mask);

  const maskClickRef = useRef(false);

  const onClickMask = (e) => {
    if (!maskClickRef.current) return;
    maskClickRef.current = false;
    if (maskClosable && mask && visible && e.target === e.currentTarget) {
      setTimeout(() => {
        onCancel?.();
      }, 100);
    }
  };
  const onEscExit = (event: React.KeyboardEvent) => {
    if (visible && event.key === 'Escape') {
      event.stopPropagation();
      onCancel();
    }
  };

  useEffect(() => {
    modalWrapperRef.current?.focus();
  }, [visible]);

  const element = (
    <ModalCard
      withoutPadding={withoutPadding}
      title={title}
      withoutLine={withoutLine}
      okLoading={okLoading}
      hideCancel={hideCancel}
      closable={closable}
      closeElement={closeElement}
      okButtonProps={okButtonProps}
      cancelButtonProps={cancelButtonProps}
      footer={footer}
      footerAlign={footerAlign}
      onCancel={onCancel}
      onOk={onOk}
      prefixCls={prefixCls}
      normalIcon={normalIcon}
      okText={okText}
      cancelText={cancelText}
      content={content}
      type={type}
    />
  );

  return (
    <>
      {visible && (
        <Portal attach={getMountContainer()}>
          <>
            {mask ? (
              <motion.div
                className={cs(`${prefixCls}-mask`, maskStyle)}
                variants={maskAnimation}
                animate="animate"
                exit="exit"
                initial="initial"
                transition={{ duration: 0.1 }}
              />
            ) : null}
            <div
              className={cs(`${prefixCls}-container`)}
              ref={modalWrapperRef}
              onClick={onClickMask}
              onKeyDown={onEscExit}
              onMouseDown={(e) => {
                maskClickRef.current = e.target === e.currentTarget;
              }}
            >
              <motion.div
                onClick={(e) => {
                  e.stopPropagation();
                }}
                ref={ref}
                role="dialog"
                variants={modalAnimation}
                animate="animate"
                transition={{ duration: 0.2 }}
                exit="exit"
                initial="initial"
                className={cs(`${prefixCls}`)}
                onAnimationComplete={(definition) => {
                  if (definition === 'animate') {
                    afterOpen?.();
                  }
                  if (definition === 'exit') {
                    afterClose?.();
                  }
                }}
              >
                {focusLock ? (
                  <FocusLock crossFrame={false} disabled={!visible}>
                    {element}
                  </FocusLock>
                ) : (
                  element
                )}
              </motion.div>
            </div>
          </>
        </Portal>
      )}
    </>
  );
}

const ModalProviderComponent = forwardRef<HTMLElement, ModalProps>(Modal);

ModalProviderComponent.displayName = 'ModalProviderComponent';

export default ModalProviderComponent;
