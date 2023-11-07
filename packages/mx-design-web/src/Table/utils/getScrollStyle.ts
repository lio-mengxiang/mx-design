import { isObject } from '@mx-design/web-utils';
import type { CSSProperties } from 'react';
import type { TableProps } from '../interface';

export function getScrollStyle(scroll: TableProps['scroll']) {
  let scrollStyle: CSSProperties = {};
  if (scroll && scroll.x && typeof scroll.x === 'number') {
    scrollStyle = {
      width: scroll.x,
    };
  }

  return scrollStyle;
}

export function getTheadScrollStyle(scroll: TableProps['scroll']) {
  let scrollStyleX: CSSProperties = {};
  if (scroll && scroll.x && typeof scroll.x === 'number') {
    scrollStyleX = {
      width: scroll.x,
    };
  }
  return scrollStyleX;
}

export function getTbodyScrollStyle(scroll: TableProps['scroll']) {
  let scrollStyleY: CSSProperties = {};
  if (scroll && scroll.y && typeof scroll.y === 'number') {
    scrollStyleY = {
      maxHeight: scroll.y,
    };
  }
  return scrollStyleY;
}
