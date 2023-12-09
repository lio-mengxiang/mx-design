import React, { Key, useMemo } from 'react';
import { isFunction } from '@mx-design/web-utils';
import { useMergeValue } from '@mx-design/hooks';
import type { INewRecord, TableProps } from '../interface';
import { isChildrenNotEmpty, getOriginData } from '../utils';
import { isNotNullUndefined } from '../../Anchor/utils';

export function useExpand<T>(
  props: TableProps<T>,
  flattenData: INewRecord<T>[],
  clonedDataKeysMap: Map<Key, INewRecord<T>>
): [Key[], (key: Key) => void] {
  const {
    defaultExpandedRowKeys,
    defaultExpandAllRows,
    expandedRowRender,
    onExpand,
    onExpandedRowsChange,
    childrenColumnName = 'children',
    expandProps,
  } = props;

  const getDefaultExpandedRowKeys = useMemo(() => {
    let rowKeys: React.Key[] = [];
    if (defaultExpandedRowKeys) {
      rowKeys = defaultExpandedRowKeys;
    } else if (defaultExpandAllRows) {
      rowKeys = flattenData.map((item, index) => {
        const originItem = getOriginData(item);
        if (isFunction(expandProps?.rowExpandable)) {
          return expandProps.rowExpandable(originItem);
        }
        if (isFunction(expandedRowRender)) {
          const renderNode = expandedRowRender(originItem, index);
          return isNotNullUndefined(renderNode) ? renderNode : false;
        }
        return isChildrenNotEmpty<T>({ record: item, childrenColumnName });
      });
    }
    return rowKeys;
  }, [childrenColumnName, defaultExpandAllRows, defaultExpandedRowKeys, expandProps, expandedRowRender, flattenData]);

  const [expandedRowKeys, setExpandedRowKeys] = useMergeValue([], {
    defaultValue: getDefaultExpandedRowKeys,
    value: props.expandedRowKeys,
  });

  function onClickExpandBtn(key: Key) {
    const isExpanded = expandedRowKeys.indexOf(key) === -1;
    const newExpandedRowKeys = isExpanded ? expandedRowKeys.concat(key) : expandedRowKeys.filter((_k) => key !== _k);
    setExpandedRowKeys(newExpandedRowKeys);
    onExpand?.(getOriginData(clonedDataKeysMap[key]), isExpanded);
    onExpandedRowsChange?.(newExpandedRowKeys);
  }

  return [expandedRowKeys, onClickExpandBtn];
}
