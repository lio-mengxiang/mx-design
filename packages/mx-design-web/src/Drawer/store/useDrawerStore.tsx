import React, { useEffect, useMemo, useRef } from 'react';
import { Escape, TAB } from '../constants';
// types
import type { DrawerProps } from '../interface';
import type { ConfigProviderProps } from '../../ConfigProvider';

export interface useDrawerStoreProps extends Pick<DrawerProps, 'getMountContainer' | 'maskClosable' | 'mask' | 'onCancel'> {
  getPrefixCls: ConfigProviderProps['getPrefixCls'];
}

export function useDrawerStore(props: useDrawerStoreProps) {
  const { getMountContainer, getPrefixCls, maskClosable, mask, onCancel } = props;
  // states
  const prefixCls = getPrefixCls('drawer');
  const isFixed = useMemo(() => {
    return getMountContainer() === document.body;
  }, [getMountContainer]);

  const drawerWrapperRef = useRef<HTMLDivElement>(null);

  // functions
  const onClickMask = function () {
    if (maskClosable && mask) {
      onCancel?.();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key?.toLowerCase() === Escape) {
      e.stopPropagation();
      onCancel?.();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      drawerWrapperRef.current?.focus();
    }, 0);
  }, []);

  return {
    // functions
    onKeyDown,
    onClickMask,
    // states
    prefixCls,
    isFixed,
    drawerWrapperRef,
  };
}
