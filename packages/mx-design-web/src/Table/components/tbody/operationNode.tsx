import React, { ReactElement } from 'react';
import { cs } from '@mx-design/web-utils';
import { EXPAND_NODE, INTERNAL_EXPAND_KEY, INTERNAL_SELECTION_KEY, LEFT, SELECTION_NODE } from '../../constants';

export function OperationNode({
  operationClassName,
  column,
  bodyOperations,
  stickyOffset,
  stickyClassName,
  record,
  getPrefixColClassName,
  type,
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

  const operationNode: ReactElement = typeof node === 'function' ? node(record) : node;

  return React.cloneElement(operationNode, {
    key: column.key,
    ...operationNode.props,
    className: cs(isExtraOperation ? operationClassName : '', getPrefixColClassName(type), stickyClassName),
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
