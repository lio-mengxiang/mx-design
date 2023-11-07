import { LEFT, RIGHT } from '../constants';

export function getFixedColumns(flattenColumns, groupColumns, leftFixedColumnsLength, rightFixedColumnsLength) {
  let hasFixedColumn = false;
  let hasFixedColumnRight = false;
  let hasFixedColumnLeft = false;
  const columnLength = flattenColumns.length;
  let leftFixedFirstRowLength = leftFixedColumnsLength;
  let rightFixedFirstRowLength = rightFixedColumnsLength;

  if (!Number.isInteger(leftFixedFirstRowLength) || leftFixedFirstRowLength < 0) leftFixedFirstRowLength = 0;
  if (!Number.isInteger(rightFixedFirstRowLength) || rightFixedFirstRowLength < 0) rightFixedFirstRowLength = 0;
  if (leftFixedFirstRowLength + rightFixedFirstRowLength >= columnLength) {
    console?.warn(
      'Warning: The sum of values in the fixedColumns array exceeds the length of columns, fixed columns will not take effect.'
    );
    return { hasFixedColumn, hasFixedColumnRight, hasFixedColumnLeft, leftFixedFirstRowLength: 0, rightFixedFirstRowLength: 0 };
  }

  if (leftFixedFirstRowLength > 0) hasFixedColumnLeft = true;
  if (rightFixedFirstRowLength > 0) hasFixedColumnRight = true;
  if (hasFixedColumnLeft || hasFixedColumnRight) hasFixedColumn = true;

  const firstColumnsRow = groupColumns[0];
  let leftFixedLastRowIndex = 0;
  let rightFixedLastRowIndex = 0;

  if (Array.isArray(firstColumnsRow)) {
    const leftColumnIndex = firstColumnsRow[leftFixedColumnsLength - 1]?.$$columnIndex;
    const rightColumnIndex = firstColumnsRow[firstColumnsRow.length - rightFixedColumnsLength]?.$$columnIndex;

    if (leftFixedColumnsLength > 0 && Array.isArray(leftColumnIndex)) {
      // eslint-disable-next-line prefer-destructuring
      leftFixedLastRowIndex = leftColumnIndex[1];
    } else {
      leftFixedLastRowIndex = leftColumnIndex;
    }

    if (rightFixedColumnsLength > 0 && Array.isArray(rightColumnIndex)) {
      // eslint-disable-next-line prefer-destructuring
      rightFixedLastRowIndex = rightColumnIndex[0];
    } else {
      rightFixedLastRowIndex = rightColumnIndex;
    }

    if (leftFixedFirstRowLength || rightFixedFirstRowLength) {
      setFixed({ groupColumns, leftFixedFirstRowLength, rightFixedFirstRowLength });
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

function setFixed({ groupColumns, leftFixedFirstRowLength, rightFixedFirstRowLength }) {
  if (groupColumns.length === 1) {
    const firstColumnsRow = groupColumns[0];
    if (leftFixedFirstRowLength) {
      for (let i = 0; i <= leftFixedFirstRowLength - 1; i++) {
        firstColumnsRow[i].$$fixed = LEFT;
      }
    }
    if (rightFixedFirstRowLength) {
      for (let i = firstColumnsRow.length - rightFixedFirstRowLength; i <= firstColumnsRow.length - 1; i++) {
        firstColumnsRow[i].$$fixed = RIGHT;
      }
    }
  }

  if (groupColumns.length > 1) {
    const columnRow = groupColumns[0];
    if (Array.isArray(columnRow)) {
      if (leftFixedFirstRowLength > 0) {
        for (let i = 0; i <= leftFixedFirstRowLength - 1; i++) {
          columnRow[i].$$fixed = LEFT;
          if (columnRow[i].children) {
            dfsColumn(columnRow[i].children, true);
          }
        }
      }

      if (rightFixedFirstRowLength > 0) {
        for (let i = columnRow.length - rightFixedFirstRowLength; i <= columnRow.length - 1; i++) {
          columnRow[i].$$fixed = RIGHT;
          if (columnRow[i].children) {
            dfsColumn(columnRow[i].children, false);
          }
        }
      }
    }
  }
}

function dfsColumn(columnRow, isLeft) {
  if (!Array.isArray(columnRow)) return;
  for (let i = 0; i <= columnRow.length - 1; i++) {
    columnRow[i].$$fixed = isLeft ? LEFT : RIGHT;
    if (columnRow[i].children) {
      dfsColumn(columnRow[i].children, isLeft);
    }
  }
}
