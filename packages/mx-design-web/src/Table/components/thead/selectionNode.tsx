import React, { useMemo } from 'react';
import { cs } from '@mx-design/web-utils';
import { Checkbox } from '../../../Checkbox';
import { DEFAULT_CHECKBOX_SIZE } from '../../constants';
import { INewRecord, TableProps } from '../../interface';

export function SelectionNode<T>({
  prefixCls,
  isRadio,
  isCheckAll,
  rowSelection,
  onCheckAll,
  allSelectedRowSetKeys,
  selectedRowSetKeys,
  data,
  outerClassName,
  ...rest
}: {
  prefixCls: string;
  isRadio: boolean;
  isCheckAll: boolean;
  onCheckAll: (checked: boolean) => void;
  allSelectedRowSetKeys: Set<React.Key>;
  selectedRowSetKeys: Set<React.Key>;
  data: INewRecord<T>[];
  rowSelection: TableProps['rowSelection'];
  outerClassName: string;
}) {
  const currentSelectedRowKeys = useMemo(() => {
    const result = [];
    selectedRowSetKeys.forEach((key) => {
      if (allSelectedRowSetKeys.has(key)) {
        result.push(key);
      }
    });
    return result;
  }, [allSelectedRowSetKeys, selectedRowSetKeys]);

  return (
    <th {...rest}>
      <div className={`${prefixCls}-th-item`}>
        {isCheckAll && !isRadio ? (
          <Checkbox
            indeterminate={data && currentSelectedRowKeys.length > 0 && currentSelectedRowKeys.length !== allSelectedRowSetKeys.size}
            checked={data && currentSelectedRowKeys.length !== 0 && currentSelectedRowKeys.length === allSelectedRowSetKeys.size}
            disabled={!allSelectedRowSetKeys.size}
            onChange={onCheckAll}
            themeStyle={DEFAULT_CHECKBOX_SIZE}
          />
        ) : null}
        {rowSelection && rowSelection.columnTitle}
      </div>
    </th>
  );
}
