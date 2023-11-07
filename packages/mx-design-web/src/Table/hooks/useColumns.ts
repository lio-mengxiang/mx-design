import { useMemo } from 'react';
import { getFlattenColumns, getGroupColumns, getInternalColumns, isCheckAllType, isCheckboxType, isRadioType } from '../utils';
import { HOLDER_NODE } from '../constants';
import { useComponent } from './useComponent';
// type
import { TableProps } from '../interface';

export function useColumns<T>(props: any) {
  const { components, rowSelection, columns = [] } = props;

  // data
  const { finalColumns, columnsDepth } = useMemo(() => getFlattenColumns(columns), [columns]);
  const isCheckbox = isCheckboxType(rowSelection);
  const isRadio = isRadioType(rowSelection);
  const isCheckAll = isCheckAllType(rowSelection);
  const shouldRenderSelectionCol = isCheckbox || isRadio;
  const { getHeaderComponentOperations, getBodyComponentOperations } = useComponent(components);

  const headerOperations = useMemo(
    () =>
      getHeaderComponentOperations({
        selectionNode: shouldRenderSelectionCol ? HOLDER_NODE : '',
      }),
    [shouldRenderSelectionCol, getHeaderComponentOperations]
  );

  const bodyOperations = useMemo(
    () =>
      getBodyComponentOperations({
        selectionNode: shouldRenderSelectionCol ? HOLDER_NODE : '',
      }),
    [shouldRenderSelectionCol, getBodyComponentOperations]
  );
  const selectionColumnWidth = rowSelection?.columnWidth;

  /**
   * @zh 将expand和selection operator 加入到finalColumns中
   * @en set expand and selection operator into finalColumns
   */
  const flattenColumns = useMemo(
    () => getInternalColumns({ rows: finalColumns, operations: bodyOperations, selectionColumnWidth, shouldRenderSelectionCol }),
    [finalColumns, bodyOperations, selectionColumnWidth, shouldRenderSelectionCol]
  );

  /**
   * @zh 得到直接渲染thead的Columns二维数组，包含rowSpan、colSpan等props
   * @en get two-dimensional array including rowSpan and other props to thead
   */
  const [groupColumns, prefixIndex] = useMemo(() => {
    return getGroupColumns({ headerOperations, columnsDepth, columns, selectionColumnWidth, shouldRenderSelectionCol });
  }, [headerOperations, columnsDepth, columns, selectionColumnWidth, shouldRenderSelectionCol]);

  return { isRadio, isCheckbox, isCheckAll, groupColumns, flattenColumns, prefixIndex };
}
