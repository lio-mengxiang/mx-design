import React from 'react';
import { isFunction } from '@mx-design/web-utils';
import { useComponent } from '../../hooks';
// type
import { TbodyProps } from '../../interface';
import { getNoDataTr, getOriginData, getRowKey, getRowSelectionType, renderTreeTrs, shouldRowExpand } from '../../utils';

export function Tbody<T>(props: any) {
  const {
    rowKey,
    components,
    flattenColumns,
    data,
    prefixCls,
    noDataElement,
    renderEmpty,
    placeholder,
    hasFixedColumn,
    tableViewWidth,
    indentSize,
    stickyOffsets,
    stickyClassNames,
    childrenColumnName,
    expandProps,
    expandedRowRender,
    isRadio,
    isCheckbox,
    rowSelection,
  } = props;

  const { ComponentTbody } = useComponent(components);
  const type = getRowSelectionType(isCheckbox, isRadio);

  const trProps = {
    components,
    flattenColumns,
    data,
    prefixCls,
    noDataElement,
    placeholder,
    hasFixedColumn,
    tableViewWidth,
    indentSize,
    stickyOffsets,
    stickyClassNames,
    childrenColumnName,
    expandProps,
    expandedRowRender,
    rowSelection,
    type,
    level: 0,
  };

  const noDataTr = getNoDataTr({ prefixCls, flattenColumns, tableViewWidth, noDataElement });

  return (
    <ComponentTbody>
      {data.length > 0
        ? data.map((record, index) => {
            const rowK = getRowKey(rowKey, record, index);
            return <React.Fragment key={rowK}>{renderTreeTrs({ record, index, rowK, trProps })}</React.Fragment>;
          })
        : noDataTr}
    </ComponentTbody>
  );
}
