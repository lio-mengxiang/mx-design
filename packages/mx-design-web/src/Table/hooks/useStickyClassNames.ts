import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { LEFT, RIGHT, DEFAULT_OPERATION_WIDTH, DEFAULT_FIXED_WIDTH } from '../constants';
// type
import type { InternalColumnProps } from '../interface';

function getIndex(column) {
  const columnIndex = column.$$columnIndex;
  if (Array.isArray(columnIndex)) {
    return column.$$fixed === RIGHT ? columnIndex[0] : columnIndex[1];
  }
  if (typeof columnIndex === 'number') {
    return columnIndex;
  }
}

function setDefaultWidth(flattenColumns, leftIndex, rightIndex) {
  flattenColumns.forEach((c, i) => {
    if (i <= leftIndex || i >= rightIndex) {
      if (c.$$isOperation) {
        c.width = c.width || DEFAULT_OPERATION_WIDTH;
      } else {
        c.width = c.width || DEFAULT_FIXED_WIDTH;
      }
    }
  });
}

function setFixed({ column, isLeft, isRight }) {
  if (isLeft) {
    column.$$fixed = LEFT;
    return;
  }
  if (isRight) {
    column.$$fixed = RIGHT;
  }
}

function dfsColumn({ columnRow, offset, flattenColumns, isLeft }) {
  for (let i = 0; i <= columnRow.length - 1; i++) {
    if (columnRow[i].children) {
      dfsColumn({ columnRow: columnRow[i].children, offset, flattenColumns, isLeft });
    } else {
      setOffset({ column: columnRow[i], offset, isLeft, flattenColumns });
    }
  }
}

function setOffset({ column, offset, isLeft, flattenColumns }) {
  const index = column.$$columnIndex;
  if (isLeft) {
    offset[index] = (offset[index - 1] || 0) + (flattenColumns[index - 1]?.width || 0);
  } else {
    offset[index] = (offset[index + 1] || 0) + (flattenColumns[index + 1]?.width || 0);
  }
}

function getClassNameFromColumn({ index, prefixCls, leftIndex, rightIndex }) {
  return cs({
    [`${prefixCls}-col-fixed-left`]: index <= leftIndex,
    [`${prefixCls}-col-fixed-right`]: index >= rightIndex,
    [`${prefixCls}-col-fixed-left-last`]: index === leftIndex,
    [`${prefixCls}-col-fixed-right-first`]: index === rightIndex,
  });
}

// get sticky cell's className
export function useStickyClassNames(
  groupColumns: InternalColumnProps[][],
  flattenColumns: InternalColumnProps[],
  prefixCls: string,
  prefixIndex: number,
  leftFixedFirstRowLength: number,
  rightFixedFirstRowLength: number,
  leftFixedLastRowIndex: number,
  rightFixedLastRowIndex: number
): [string[][], string[], string[]] {
  const leftIndex = leftFixedLastRowIndex + prefixIndex;
  const rightIndex = rightFixedLastRowIndex;
  const colWidths = flattenColumns.map((c) => c.width);

  setDefaultWidth(flattenColumns, leftIndex, rightFixedLastRowIndex);

  const stickyClassNames = useMemo(() => {
    return flattenColumns.map((column, index) => {
      setFixed({ column, isLeft: index <= leftIndex, isRight: index >= rightIndex });
      return getClassNameFromColumn({ index, prefixCls, leftIndex, rightIndex });
    });
  }, [leftIndex, prefixCls, rightIndex]);

  const groupStickyClassNames = useMemo(
    () =>
      groupColumns.map((columnRow) => {
        return columnRow.map((column, i) => {
          const index = getIndex(column);
          setFixed({ column, isLeft: index <= leftIndex, isRight: index >= rightIndex });
          return getClassNameFromColumn({ index, prefixCls, leftIndex, rightIndex });
        });
      }),
    [leftIndex, prefixCls, rightIndex]
  );

  const stickyOffsets = useMemo(() => {
    const offset = Array(flattenColumns.length).fill(undefined);
    const columnRow = groupColumns[0];

    if (Array.isArray(columnRow)) {
      for (let i = 0; i <= leftFixedFirstRowLength + prefixIndex - 1; i++) {
        if (columnRow[i].children) {
          dfsColumn({ columnRow: columnRow[i].children, offset, flattenColumns, isLeft: true });
        } else {
          setOffset({ column: columnRow[i], offset, isLeft: true, flattenColumns });
        }
      }

      for (let i = columnRow.length - 1, j = columnRow.length - rightFixedFirstRowLength; i >= j; i--) {
        if (columnRow[i].children) {
          dfsColumn({ columnRow: columnRow[i].children, offset, flattenColumns, isLeft: false });
        } else {
          setOffset({ column: columnRow[i], offset, isLeft: false, flattenColumns });
        }
      }
    }

    return offset;
  }, [colWidths.join('-'), leftFixedFirstRowLength, rightFixedFirstRowLength]);

  return [groupStickyClassNames, stickyClassNames, stickyOffsets];
}
