import { useMemo } from 'react';
import { getFlattenColumns, getGroupColumns, getInternalColumns, isCheckAllType, isCheckboxType, isRadioType } from '../utils';
import { HOLDER_NODE } from '../constants';
import { useComponent } from './useComponent';
// type
import { ColumnProps, TableProps } from '../interface';

interface useColumnsProps<T> {
  components: TableProps['components'];
  rowSelection: TableProps['rowSelection'];
  columns: ColumnProps<T>[];
  expandProps: TableProps['expandProps'];
  expandedRowRender: TableProps['expandedRowRender'];
}

export function useColumns<T>(props: useColumnsProps<T>) {
  const { components, rowSelection, columns = [], expandProps, expandedRowRender } = props;
  // data
  const { finalColumns, columnsDepth } = useMemo(() => getFlattenColumns(columns), [columns]);
  const isCheckbox = isCheckboxType(rowSelection);
  const isRadio = isRadioType(rowSelection);
  const isCheckAll = isCheckAllType(rowSelection);
  const shouldRenderSelectionCol = isCheckbox || isRadio;
  const shouldRenderExpandCol = !!expandedRowRender;
  const { getHeaderComponentOperations, getBodyComponentOperations } = useComponent(components);
  const { width: expandColWidth } = expandProps;

  const headerOperations = useMemo(
    () =>
      getHeaderComponentOperations({
        selectionNode: shouldRenderSelectionCol ? HOLDER_NODE : '',
        expandNode: shouldRenderExpandCol ? HOLDER_NODE : '',
      }),
    [getHeaderComponentOperations, shouldRenderSelectionCol, shouldRenderExpandCol]
  );

  const bodyOperations = useMemo(
    () =>
      getBodyComponentOperations({
        selectionNode: shouldRenderSelectionCol ? HOLDER_NODE : '',
        expandNode: shouldRenderExpandCol ? HOLDER_NODE : '',
      }),
    [getBodyComponentOperations, shouldRenderSelectionCol, shouldRenderExpandCol]
  );
  const selectionColumnWidth = rowSelection?.columnWidth;

  /**
   * @zh 将expand和selection operator 加入到finalColumns中
   * @en set expand and selection operator into finalColumns
   */
  const flattenColumns = useMemo(
    () =>
      getInternalColumns({
        rows: finalColumns,
        operations: bodyOperations,
        columnsDepth,
        selectionColumnWidth,
        shouldRenderSelectionCol,
        shouldRenderExpandCol,
        expandColWidth,
      }),
    [finalColumns, bodyOperations, columnsDepth, selectionColumnWidth, shouldRenderSelectionCol, shouldRenderExpandCol, expandColWidth]
  );

  /**
   * @zh 得到直接渲染thead的Columns二维数组，包含rowSpan、colSpan等props
   * @en get two-dimensional array including rowSpan and other props to thead
   */
  const [groupColumns, prefixIndex] = useMemo(() => {
    return getGroupColumns({
      headerOperations,
      columnsDepth,
      columns,
      selectionColumnWidth,
      shouldRenderSelectionCol,
      expandColWidth,
      shouldRenderExpandCol,
    });
  }, [headerOperations, columnsDepth, columns, selectionColumnWidth, shouldRenderSelectionCol, expandColWidth, shouldRenderExpandCol]);

  return { isRadio, isCheckbox, isCheckAll, groupColumns, flattenColumns, prefixIndex };
}
