import React, { ReactElement } from 'react';
import { cs } from '@mx-design/web-utils';
import { CHECKBOX, EXPAND_NODE, INTERNAL_EXPAND_KEY, INTERNAL_SELECTION_KEY, LEFT, RADIO, SELECTION_NODE } from '../../constants';
import type { InternalColumnProps } from '../../interface';

export function OperationNode<T>({
  operationClassName,
  column,
  headerOperations,
  selectionRowSpanProps,
  stickyOffset,
  stickyClassName,
  prefixCls,
  isRadio,
}: {
  operationClassName: string;
  column: InternalColumnProps<T>;
  headerOperations: {
    name?: string;
    node?: React.ReactNode;
    width?: number;
  }[];
  selectionRowSpanProps:
    | {
        rowSpan: number;
      }
    | {
        rowSpan?: undefined;
      };
  stickyOffset: number;
  stickyClassName: string;
  prefixCls: string;
  isRadio: boolean;
}) {
  let { node } = column;
  let isExtraOperation = true;

  if (column.title === INTERNAL_SELECTION_KEY) {
    node = headerOperations.find((o) => o.name === SELECTION_NODE)?.node;
    isExtraOperation = false;
  }

  if (column.title === INTERNAL_EXPAND_KEY) {
    node = headerOperations.find((o) => o.name === EXPAND_NODE)?.node;
    isExtraOperation = false;
  }

  const operationNode = node as ReactElement;

  return React.cloneElement(operationNode, {
    key: column.key,
    ...operationNode?.props,
    ...selectionRowSpanProps,
    className: cs(isExtraOperation ? operationClassName : '', operationNode?.props?.outerClassName, stickyClassName),
    style: {
      ...operationNode?.props?.style,
      ...(column.$$fixed === LEFT
        ? {
            left: stickyOffset,
          }
        : {}),
      width: column.width,
      minWidth: column.width,
    },
  });
}
