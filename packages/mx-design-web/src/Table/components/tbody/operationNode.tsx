import React, { ReactElement } from 'react';
import { cs } from '@mx-design/web-utils';
import { EXPAND_NODE, INTERNAL_EXPAND_KEY, INTERNAL_SELECTION_KEY, LEFT, SELECTION_NODE } from '../../constants';
import type { INewRecord, InternalColumnProps } from '../../interface';

export function OperationNode<T>({
  operationClassName,
  column,
  bodyOperations,
  stickyOffset,
  stickyClassName,
  record,
}: {
  operationClassName: string;
  column: InternalColumnProps<T>;
  bodyOperations: {
    name?: string;
    node?: React.ReactNode | ((record: any) => React.ReactNode);
    width?: number;
  }[];
  stickyOffset: number;
  stickyClassName: string;
  record: INewRecord<T>;
}) {
  let { node } = column;

  let isExtraOperation = true;

  if (column.title === INTERNAL_SELECTION_KEY) {
    node = bodyOperations.find((o) => o.name === SELECTION_NODE)?.node;
    isExtraOperation = false;
  }

  if (column.title === INTERNAL_EXPAND_KEY) {
    node = bodyOperations.find((o) => o.name === EXPAND_NODE)?.node;
    isExtraOperation = false;
  }

  const operationNode = (typeof node === 'function' ? node(record) : node) as ReactElement;

  return React.cloneElement(operationNode, {
    key: column.key,
    ...operationNode?.props,
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
