import { motion } from 'framer-motion';
import React, { forwardRef, useContext, useEffect, useMemo, useRef } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { ConfigContext } from '../../ConfigProvider';
import { duration1, duration2, maskAnimation, drawerAnimation, sentinelStyle } from '../constants';
import { useModalClassNames } from '../hooks';
import { DrawerCard } from './drawerCard';
import { Portal } from '../../Portal';
import { useOverflowHidden } from '../../Modal/hooks';
// type
import type { DrawerProps } from '../interface';
import type { IDrawerRef } from './drawerProvider';
import { useDrawer } from '../hooks/useDrawer';
import { useDrawerStore } from '../store';
import { useStyles } from '../../hooks';

type IDrawerProps = DrawerProps & IDrawerRef['remove'];

const defaultProps: Partial<IDrawerProps> = {
  mask: true,
  maskClosable: true,
  footerAlign: 'right',
  placement: 'right',
  focusLock: true,
  showCloseIcon: true,
  width: 332,
  height: 332,
  getMountContainer: () => document.body,
};

export function Drawer(baseProps: DrawerProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Drawer);

  const {
    visible,
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
    onEscExit,
    onClickMask,
    // states
    prefixCls,
    isFixed,
    drawerWrapperRef,
    sentinelStartRef,
    sentinelEndRef,
  } = useDrawerStore({ getMountContainer, getPrefixCls, maskClosable, mask, visible, onCancel });

  // classnames
  const { maskCls, wrapperCls, rootWrapperCls } = useModalClassNames({
    getPrefixCls,
    isFixed,
    className,
    visible,
    mask,
    placement,
  });

  useOverflowHidden(getMountContainer, visible && mask);

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
      {visible && (
        <Portal attach={getMountContainer()}>
          <div className={rootWrapperCls} onKeyDown={onEscExit} ref={drawerWrapperRef} tabIndex={-1} style={wrapperStyle}>
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
                <>
                  <div tabIndex={0} ref={sentinelStartRef} style={sentinelStyle} aria-hidden="true" data-sentinel="start" />
                  {element}
                  <div tabIndex={0} ref={sentinelEndRef} style={sentinelStyle} aria-hidden="true" data-sentinel="end" />
                </>
              ) : (
                element
              )}
            </motion.div>
          </div>
        </Portal>
      )}
    </>
  );
}

const DrawerProviderComponent = forwardRef<HTMLElement, DrawerProps>(Drawer);

DrawerProviderComponent.displayName = 'DrawerProviderComponent';

export default DrawerProviderComponent;
