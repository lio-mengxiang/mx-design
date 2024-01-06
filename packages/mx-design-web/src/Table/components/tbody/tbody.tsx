import React from 'react';
import { cs, isFunction } from '@mx-design/web-utils';
import { useComponent } from '../../hooks';
import { getNoDataTr, getOriginData, getRowSelectionType, renderTreeTrs, shouldRowExpand } from '../../utils';
// type
import { TbodyProps } from '../../interface';

export type trPropsType<T> = Omit<
  TbodyProps<T>,
  'fixedHeader' | 'ComponentBodyWrapper' | 'ComponentTable' | 'refTableBody' | 'scroll' | 'processedData' | 'isRadio' | 'isCheckbox'
> & {
  type: 'checkbox' | 'radio';
  level: number;
  indentSize: number;
};
export function Tbody<T>(
  props: Omit<TbodyProps<T>, 'fixedHeader' | 'ComponentBodyWrapper' | 'ComponentTable' | 'refTableBody' | 'scroll'>
) {
  const {
    components,
    processedData,
    flattenColumns,
    prefixCls,
    noDataElement,
    expandedRowKeys,
    onClickExpandBtn,
    placeholder,
    hasFixedColumn,
    tableViewWidth,
    stickyOffsets,
    stickyClassNames,
    childrenColumnName,
    expandProps,
    expandedRowRender,
    isRadio,
    isCheckbox,
    rowSelection,
    selectedRowSetKeys,
    indeterminateSetKeys,
    onCheck,
    onCheckRadio,
    onRow,
    rowClassName,
    shouldRenderTreeDataExpandRow,
    indentSize,
  } = props;

  const { ComponentTbody } = useComponent(components);
  const type = getRowSelectionType(isCheckbox, isRadio);

  const trProps: trPropsType<T> = {
    components,
    flattenColumns,
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
    expandedRowKeys,
    rowSelection,
    type,
    level: 0,
    selectedRowSetKeys,
    indeterminateSetKeys,
    onCheck,
    onCheckRadio,
    onClickExpandBtn,
    onRow,
    rowClassName,
    shouldRenderTreeDataExpandRow,
  };
  const noDataTr = getNoDataTr({ prefixCls, flattenColumns, tableViewWidth, noDataElement });

  const er = isFunction(expandedRowRender) ? (r, i) => expandedRowRender(getOriginData(r), i) : expandedRowRender;

  return (
    <ComponentTbody>
      {processedData.length > 0
        ? processedData.map((record, index) => {
            const shouldRenderExpandIcon =
              shouldRowExpand<T>({ expandProps, record, index, er }) && expandedRowKeys.indexOf(record.$$key) !== -1;

            return (
              <React.Fragment key={record.$$key}>
                {renderTreeTrs({ record, index, trProps, expandedRowKeys, er })}
                {shouldRenderExpandIcon && (
                  <tr className={cs(`${prefixCls}-tr`, `${prefixCls}-expand-content`)} key={`${record.$$key}-expanded`}>
                    <td className={cs(`${prefixCls}-td`, `${prefixCls}-expand-content`)} colSpan={flattenColumns.length}>
                      {hasFixedColumn ? (
                        <div className={`${prefixCls}-expand-fixed-row`} style={{ width: tableViewWidth }}>
                          {er?.(record, index)}
                        </div>
                      ) : (
                        er?.(record, index)
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })
        : noDataTr}
    </ComponentTbody>
  );
}
