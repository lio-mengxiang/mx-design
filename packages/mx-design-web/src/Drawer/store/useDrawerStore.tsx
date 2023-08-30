import React, { useEffect, useMemo, useRef } from 'react';
// types
import type { DrawerProps } from '../interface';
import type { ConfigProviderProps } from '../../ConfigProvider';

export interface useDrawerStoreProps extends Pick<DrawerProps, 'getMountContainer' | 'maskClosable' | 'mask' | 'visible' | 'onCancel'> {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
}

export function useDrawerStore(props: useDrawerStoreProps) {
  const { getMountContainer, getPrefixCls, maskClosable, mask, visible, onCancel } = props;
  // states
  const prefixCls = getPrefixCls('drawer');
  const isFixed = useMemo(() => {
    return getMountContainer() === document.body;
  }, [getMountContainer]);

  const sentinelStartRef = useRef<HTMLDivElement>();
  const sentinelEndRef = useRef<HTMLDivElement>();
  const drawerWrapperRef = useRef<HTMLDivElement>(null);

  // functions
  const onClickMask = function () {
    if (maskClosable && mask && visible) {
      onCancel?.();
    }
  };

  const onEscExit = (e: React.KeyboardEvent) => {
    const { shiftKey } = e;

    if (e.key === 'Tab') {
      if (!shiftKey && document.activeElement === sentinelEndRef.current) {
        sentinelStartRef.current?.focus({ preventScroll: true });
      } else if (shiftKey && document.activeElement === sentinelStartRef.current) {
        sentinelEndRef.current?.focus({ preventScroll: true });
      }
      return;
    }

    if (visible && e.key === 'Escape') {
      e.stopPropagation();
      onCancel?.();
    }
  };

  useEffect(() => {
    if (visible) {
      drawerWrapperRef.current?.focus();
    }
  }, [visible]);

  return {
    // functions
    onEscExit,
    onClickMask,
    // states
    prefixCls,
    isFixed,
    drawerWrapperRef,
    sentinelStartRef,
    sentinelEndRef,
  };
}
