import { isObject } from '@mx-design/web-utils';
import type { CSSProperties } from 'react';
import { LEFT } from '../constants';

/**
 * set th style, such as textAlign，colSpan, row Span.
 */
export function getThProps({ columnFixedStyle, headerCellStyle, align, key, colSpan, rowSpan }) {
  const styleTh: CSSProperties = isObject(headerCellStyle)
    ? {
        ...columnFixedStyle,
        ...headerCellStyle,
      }
    : {
        ...columnFixedStyle,
      };

  if (align !== LEFT) {
    styleTh.textAlign = align;
  }

  const thProps: Record<string, any> = {
    style: styleTh,
    key,
  };

  if (colSpan && colSpan > 1) thProps.colSpan = colSpan;
  if (rowSpan && rowSpan > 1) thProps.rowSpan = rowSpan;
  return thProps;
}
