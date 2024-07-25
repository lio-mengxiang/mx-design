import { motion } from 'framer-motion';
import React, { forwardRef, useContext, useRef } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { duration1, duration2, maskAnimation, drawerAnimation } from '../constants';
import { useModalClassNames } from '../hooks';
import { DrawerCard } from './drawerCard';
import { Portal } from '../../Portal';
import { useOverflowHidden } from '../../Modal/hooks';
import { useDrawerStore } from '../store';
import { useStyles } from '../../hooks';
import { useFocusTrap } from '../../hooks/useFocusTarp';
// type
import type { DrawerProps } from '../interface';

type IDrawerProps = DrawerProps;

const defaultProps: Partial<IDrawerProps> = {
  mask: true,
  maskClosable: true,
  footerAlign: 'right',
  placement: 'right',
  focusLock: true,
  showCloseIcon: true,
  width: 420,
  height: 420,
  getMountContainer: () => document.body,
};

function Drawer(baseProps: DrawerProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Drawer);

  const {
    mask,
    title,
    okLoading,
    maskClosable,
    maskStyle,
    hideCancelBtn,
    showCloseIcon,
    okText,
    cancelText,
    okButtonProps,
    cancelButtonProps,
    footer,
    footerAlign,
    focusLock,
    getMountContainer,
    onCancel,
    onOk,
    afterClose,
    afterOpen,
    content,
    className,
    style,
    themeStyle,
    headerStyle,
    closeIcon,
    bodyStyle,
    placement,
    width,
    height,
  } = props;

  // style
  const { wrapperStyle } = useStyles<DrawerProps>({ style, themeStyle });

  const {
    // functions
    onKeyDown,
    onClickMask,
    // states
    prefixCls,
    isFixed,
    drawerWrapperRef,
  } = useDrawerStore({ getMountContainer, getPrefixCls, maskClosable, mask, onCancel });
  const focusRef = useRef(null);
  useFocusTrap(focusRef, true);
  // classnames
  const { maskCls, wrapperCls, rootWrapperCls, innerWrapperCls } = useModalClassNames({
    getPrefixCls,
    isFixed,
    className,
    mask,
    placement,
  });

  useOverflowHidden(getMountContainer, mask);

  const element = (
    <DrawerCard
      title={title}
      okLoading={okLoading}
      hideCancelBtn={hideCancelBtn}
      showCloseIcon={showCloseIcon}
      okButtonProps={okButtonProps}
      cancelButtonProps={cancelButtonProps}
      footer={footer}
      footerAlign={footerAlign}
      onCancel={onCancel}
      onOk={onOk}
      prefixCls={prefixCls}
      okText={okText}
      cancelText={cancelText}
      content={content}
      headerStyle={headerStyle}
      closeIcon={closeIcon}
      bodyStyle={bodyStyle}
    />
  );

  return (
    <>
      <Portal attach={getMountContainer()}>
        <div className={rootWrapperCls} onKeyDown={onKeyDown} ref={drawerWrapperRef} tabIndex={-1} style={wrapperStyle}>
          {mask ? (
            <motion.div
              className={maskCls}
              style={maskStyle}
              variants={maskAnimation}
              animate="animate"
              exit="exit"
              initial="initial"
              onClick={onClickMask}
              transition={duration1}
              tabIndex={-1}
            />
          ) : null}
          <motion.div
            tabIndex={-1}
            className={wrapperCls}
            ref={ref}
            role="dialog"
            style={placement === 'left' || placement === 'right' ? { width } : { height }}
            variants={drawerAnimation(placement)}
            transition={duration2}
            animate="animate"
            exit="exit"
            initial="initial"
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
              <div ref={focusRef} className={innerWrapperCls}>
                {element}
              </div>
            ) : (
              element
            )}
          </motion.div>
        </div>
      </Portal>
    </>
  );
}

const DrawerProviderComponent = forwardRef<HTMLElement, DrawerProps>(Drawer);

export default DrawerProviderComponent;
