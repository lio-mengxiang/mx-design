import { LEFT, RIGHT } from '../constants';
// type
import type { InternalColumnProps } from '../interface';

export function getFixedColumns(
  flattenColumns: InternalColumnProps[],
  groupColumns: InternalColumnProps[][],
  leftFixedColumnsLength: number,
  rightFixedColumnsLength: number,
  prefixIndex: number
) {
  let hasFixedColumn = false;
  let hasFixedColumnRight = false;
  let hasFixedColumnLeft = false;
  const columnLength = flattenColumns.length;
  let leftFixedFirstRowLength = leftFixedColumnsLength;
  let rightFixedFirstRowLength = rightFixedColumnsLength;

  if (!Number.isInteger(leftFixedFirstRowLength) || leftFixedFirstRowLength < 0) leftFixedFirstRowLength = 0;
  if (!Number.isInteger(rightFixedFirstRowLength) || rightFixedFirstRowLength < 0) rightFixedFirstRowLength = 0;
  if (leftFixedFirstRowLength + rightFixedFirstRowLength + prefixIndex >= columnLength) {
    console?.warn(
      'Warning: The sum of values in the fixedColumns array exceeds the length of columns, fixed columns will not take effect.'
    );
    return {
      hasFixedColumn,
      hasFixedColumnRight,
      hasFixedColumnLeft,
      leftFixedFirstRowLength: 0,
      rightFixedFirstRowLength: 0,
      leftFixedLastRowIndex: 0,
      rightFixedLastRowIndex: 0,
    };
  }

  if (leftFixedFirstRowLength > 0) hasFixedColumnLeft = true;
  if (rightFixedFirstRowLength > 0) hasFixedColumnRight = true;
  if (hasFixedColumnLeft || hasFixedColumnRight) hasFixedColumn = true;

  const firstColumnsRow = groupColumns[0];

  let leftFixedLastRowIndex = 0;
  let rightFixedLastRowIndex = 0;

  if (Array.isArray(firstColumnsRow) && hasFixedColumn) {
    const leftColumnIndex = firstColumnsRow[leftFixedColumnsLength + prefixIndex - 1]?.$$columnIndex;
    const rightColumnIndex = firstColumnsRow[firstColumnsRow.length - rightFixedColumnsLength]?.$$columnIndex;

    if (leftFixedColumnsLength > 0 && Array.isArray(leftColumnIndex)) {
      // eslint-disable-next-line prefer-destructuring
      leftFixedLastRowIndex = leftColumnIndex[1];
    } else {
      leftFixedLastRowIndex = leftColumnIndex as number;
    }

    if (rightFixedColumnsLength > 0 && Array.isArray(rightColumnIndex)) {
      // eslint-disable-next-line prefer-destructuring
      rightFixedLastRowIndex = rightColumnIndex[0];
    } else {
      rightFixedLastRowIndex = rightColumnIndex as number;
    }
  }

  return {
    hasFixedColumn,
    hasFixedColumnRight,
    hasFixedColumnLeft,
    leftFixedFirstRowLength,
    rightFixedFirstRowLength,
    leftFixedLastRowIndex,
    rightFixedLastRowIndex,
  };
}
