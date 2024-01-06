import { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { LEFT, RIGHT, DEFAULT_OPERATION_WIDTH, DEFAULT_FIXED_WIDTH } from '../constants';
import { px2Number } from '../utils';
// type
import type { InternalColumnProps } from '../interface';

function getIndex(column: InternalColumnProps) {
  const columnIndex = column.$$columnIndex;
  if (Array.isArray(columnIndex)) {
    return column.$$fixed === RIGHT ? columnIndex[0] : columnIndex[1];
  }
  if (typeof columnIndex === 'number') {
    return columnIndex;
  }
}

function setDefaultWidth(flattenColumns: InternalColumnProps[], leftIndex: number, rightIndex: number) {
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

function dfsColumn({
  columnRow,
  offset,
  flattenColumns,
  isLeft,
}: {
  columnRow: InternalColumnProps[];
  offset: number[];
  isLeft: boolean;
  flattenColumns: InternalColumnProps[];
}) {
  for (let i = 0; i <= columnRow.length - 1; i++) {
    if (columnRow[i].children) {
      dfsColumn({ columnRow: columnRow[i].children, offset, flattenColumns, isLeft });
    } else {
      setOffset({ column: columnRow[i], offset, isLeft, flattenColumns });
    }
  }
}

function setOffset({
  column,
  offset,
  isLeft,
  flattenColumns,
}: {
  column: InternalColumnProps;
  offset: number[];
  isLeft: boolean;
  flattenColumns: InternalColumnProps[];
}) {
  const index = column.$$columnIndex as number;
  if (isLeft) {
    offset[index] = (offset[index - 1] || 0) + px2Number(flattenColumns[index - 1]?.width);
  } else {
    offset[index] = (offset[index + 1] || 0) + px2Number(flattenColumns[index + 1]?.width);
  }
}

function getClassNameFromColumn({
  index,
  prefixCls,
  leftIndex,
  rightIndex,
}: {
  index: number;
  prefixCls: string;
  leftIndex: number;
  rightIndex: number;
}) {
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
  leftFixedLastRowIndex: number,
  rightFixedLastRowIndex: number,
  leftFixedFirstRowLength: number,
  rightFixedFirstRowLength: number,
  prefixIndex: number,
  hasFixedColumn: boolean,
  hasFixedColumnRight: boolean,
  hasFixedColumnLeft: boolean
): [string[][], string[], number[]] {
  const colWidths = flattenColumns.map((c) => c.width);

  setDefaultWidth(flattenColumns, leftFixedLastRowIndex, rightFixedLastRowIndex);

  const stickyClassNames = useMemo(() => {
    if (!hasFixedColumn) return [];
    return flattenColumns.map((column, index) => {
      setFixed({ column, isLeft: index <= leftFixedLastRowIndex, isRight: index >= rightFixedLastRowIndex });
      return getClassNameFromColumn({ index, prefixCls, leftIndex: leftFixedLastRowIndex, rightIndex: rightFixedLastRowIndex });
    });
  }, [leftFixedLastRowIndex, prefixCls, rightFixedLastRowIndex]);

  const groupStickyClassNames = useMemo(() => {
    if (!hasFixedColumn) return [];
    return groupColumns.map((columnRow) => {
      return columnRow.map((column, i) => {
        const index = getIndex(column);
        setFixed({ column, isLeft: index <= leftFixedLastRowIndex, isRight: index >= rightFixedLastRowIndex });

        return getClassNameFromColumn({ index, prefixCls, leftIndex: leftFixedLastRowIndex, rightIndex: rightFixedLastRowIndex });
      });
    });
  }, [leftFixedLastRowIndex, prefixCls, rightFixedLastRowIndex]);

  const stickyOffsets = useMemo(() => {
    const offset: number[] = Array(flattenColumns.length).fill(undefined);
    if (!hasFixedColumn) return offset;
    const columnRow = groupColumns[0];

    if (Array.isArray(columnRow)) {
      if (hasFixedColumnLeft) {
        for (let i = 0; i <= leftFixedFirstRowLength + prefixIndex - 1; i++) {
          if (columnRow[i].children) {
            dfsColumn({ columnRow: columnRow[i].children, offset, flattenColumns, isLeft: true });
          } else {
            setOffset({ column: columnRow[i], offset, isLeft: true, flattenColumns });
          }
        }
      }

      if (hasFixedColumnRight) {
        for (let i = columnRow.length - 1, j = columnRow.length - rightFixedFirstRowLength; i >= j; i--) {
          if (columnRow[i].children) {
            dfsColumn({ columnRow: columnRow[i].children, offset, flattenColumns, isLeft: false });
          } else {
            setOffset({ column: columnRow[i], offset, isLeft: false, flattenColumns });
          }
        }
      }
    }

    return offset;
  }, [colWidths.join('-'), leftFixedLastRowIndex, rightFixedLastRowIndex]);

  return [groupStickyClassNames, stickyClassNames, stickyOffsets];
}
