import { useMemo } from 'react';
import { isObject, mergeObject } from '@mx-design/web-utils';
import { ComponentsProps } from '../interface';
import { EXPAND_NODE, SELECTION_NODE } from '../constants';

const defaultComponents: ComponentsProps = {
  table: 'table',
  header: {
    operations: ({ selectionNode, expandNode }) => [
      {
        name: SELECTION_NODE,
        node: selectionNode,
      },
      {
        name: EXPAND_NODE,
        node: expandNode,
      },
    ],
    wrapper: 'div',
    thead: 'thead',
    row: 'tr',
    th: 'th',
    cell: 'div',
  },
  body: {
    operations: ({ selectionNode, expandNode }) => [
      {
        name: SELECTION_NODE,
        node: selectionNode,
      },
      {
        name: EXPAND_NODE,
        node: expandNode,
      },
    ],
    wrapper: 'div',
    tbody: 'tbody',
    row: 'tr',
    td: 'td',
    cell: 'span',
  },
};

export function useComponent(components: ComponentsProps) {
  const _components = useMemo(
    () => (isObject(components) ? mergeObject({}, defaultComponents, components) : defaultComponents),
    [components]
  );

  return {
    getHeaderComponentOperations: _components.header.operations,
    getBodyComponentOperations: _components.body.operations,
    ComponentTable: _components.table,
    ComponentHeaderWrapper: _components.header.wrapper,
    ComponentThead: _components.header.thead,
    ComponentHeaderRow: _components.header.row,
    ComponentTh: _components.header.th,
    ComponentHeaderCell: _components.header.cell,
    ComponentBodyWrapper: _components.body.wrapper,
    ComponentTbody: _components.body.tbody,
    ComponentBodyRow: _components.body.row,
    ComponentTd: _components.body.td,
    ComponentBodyCell: _components.body.cell,
  };
}
