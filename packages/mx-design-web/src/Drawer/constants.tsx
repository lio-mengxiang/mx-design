import React from 'react';
import { Variants } from 'framer-motion';
import { EN_US, ZH_CN } from '../Locale/constants';
import type { DrawerPlacement } from './interface';

export function drawerAnimation(placement?: DrawerPlacement): Variants {
  let originX;
  let originY;
  switch (placement) {
    case 'top':
      originY = '-100%';
      break;
    case 'bottom':
      originY = '100%';
      break;
    case 'left':
      originX = '-100%';
      break;
    case 'right':
      originX = '100%';
      break;
    default:
      originX = '100%';
  }

  return {
    initial: {
      x: `${originX}`,
      y: `${originY}`,
    },
    animate: {
      x: 0,
      y: 0,
    },
    exit: {
      x: `${originX}`,
      y: `${originY}`,
    },
  };
}
export const maskAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const DRAWER_NAMESPACE = 'Drawer';

export const DRAWER_LOCAL = {
  [EN_US]: {
    OK_TEXT: 'Ok',
    CANCEL_TEXT: 'Cancel',
  },
  [ZH_CN]: {
    OK_TEXT: '确定',
    CANCEL_TEXT: '取消',
  },
};

export const duration1 = { duration: 0.1 };
export const duration2 = { ease: 'easeOut', duration: 0.2 };
export const sentinelStyle: React.CSSProperties = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none',
  position: 'absolute',
};
