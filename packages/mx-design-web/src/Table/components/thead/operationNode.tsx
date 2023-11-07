import React, { ReactElement } from 'react';
import { cs } from '@mx-design/web-utils';
import { EXPAND_NODE, INTERNAL_EXPAND_KEY, INTERNAL_SELECTION_KEY, LEFT, SELECTION_NODE } from '../../constants';

export function OperationNode({
  operationClassName,
  column,
  headerOperations,
  selectionRowSpanProps,
  stickyOffset,
  stickyClassName,
  prefixCls,
  isRadio,
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
    ...operationNode.props,
    ...selectionRowSpanProps,
    className: cs(
      isExtraOperation ? operationClassName : '',
      cs(operationClassName, `${prefixCls}-${isRadio ? 'radio' : 'checkbox'}`),
      stickyClassName
    ),
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
