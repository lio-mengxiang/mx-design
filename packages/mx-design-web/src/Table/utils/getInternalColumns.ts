import { ReactNode } from 'react';
import { EXPAND_NODE, INTERNAL_EXPAND_KEY, INTERNAL_SELECTION_KEY, SELECTION_NODE } from '../constants';
// type
import type { InternalColumnProps } from '../interface';

interface getInternalColumnsProps<T> {
  rows: InternalColumnProps[];
  operations: {
    name?: string;
    node?: ReactNode | ((record: any) => ReactNode);
    width?: number;
  }[];
  shouldRenderSelectionCol: boolean;
  shouldRenderExpandCol: boolean;
  selectionColumnWidth: number;
  columnsDepth: number;
  expandColWidth: number;
}

export function getInternalColumns<T>({
  rows,
  operations,
  shouldRenderSelectionCol,
  shouldRenderExpandCol,
  selectionColumnWidth,
  columnsDepth = undefined,
  expandColWidth,
}: getInternalColumnsProps<T>) {
  const _rows: InternalColumnProps[] = [];
  rows.forEach((r, i) => {
    if (i === 0) {
      r.$$isFirstColumn = true;
    } else {
      r.$$isFirstColumn = false;
    }
    _rows.push(r);
  });

  const selectionColumn = shouldRenderSelectionCol && {
    key: INTERNAL_SELECTION_KEY,
    title: INTERNAL_SELECTION_KEY,
    width: selectionColumnWidth,
    $$isOperation: true,
  };

  const expandColumn = shouldRenderExpandCol && {
    key: INTERNAL_EXPAND_KEY,
    title: INTERNAL_EXPAND_KEY,
    width: expandColWidth,
    $$isOperation: true,
  };

  const filteredOperations = operations.filter((opt) => opt.node);
  const operationsArray = [];
  filteredOperations.forEach((operation, i) => {
    if (operation.node) {
      if (operation.name === EXPAND_NODE) {
        operationsArray[i] = {
          ...expandColumn,
          $$columnIndex: i,
          rowSpan: columnsDepth,
        };
      } else if (operation.name === SELECTION_NODE) {
        operationsArray[i] = {
          ...selectionColumn,
          $$columnIndex: i,
          rowSpan: columnsDepth,
        };
      } else {
        operationsArray[i] = {
          ...operation,
          title: operation.name,
          key: operation.name,
          $$isOperation: true,
          $$columnIndex: i,
          rowSpan: columnsDepth,
        };
      }
    }
  });

  return operationsArray.concat(_rows);
}
