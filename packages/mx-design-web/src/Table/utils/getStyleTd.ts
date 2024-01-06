import { isObject } from '@mx-design/web-utils';
import type { CSSProperties } from 'react';
import { LEFT, RIGHT } from '../constants';

export function getStyleTd({ column, stickyOffset }) {
  let styleTd: CSSProperties = {};

  if (column.$$fixed === LEFT) {
    styleTd.left = stickyOffset;
  }

  if (column.$$fixed === RIGHT) {
    styleTd.right = stickyOffset;
  }

  if (isObject(column.bodyCellStyle)) {
    styleTd = {
      ...styleTd,
      ...column.bodyCellStyle,
    };
  }

  if (column.align) {
    styleTd.textAlign = column.align;
  }

  return styleTd;
}
