import { get } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { getOriginData, isInvalidRenderElement } from '../utils';
import type { INewRecord, InternalColumnProps, TableProps } from '../interface';

export function useGetCellChildren<T>({
  column,
  record,
  trIndex,
  placeholder,
}: {
  column: InternalColumnProps;
  record: INewRecord<T>;
  trIndex: number;
  placeholder: TableProps['placeholder'];
}) {
  let tdProps: {
    rowSpan?: number;
    colSpan?: number;
  } = {};
  let rowSpan;
  let colSpan;

  let renderElement = useMemo(
    () => column.render?.(get(record, column.dataIndex), getOriginData(record), trIndex),
    [record, column, trIndex]
  );

  if (isInvalidRenderElement(renderElement)) {
    tdProps = renderElement.props;
    rowSpan = tdProps?.rowSpan;
    colSpan = tdProps?.colSpan;
    renderElement = renderElement.children;
  }
  const v = get(record, column.dataIndex);

  // Check column.render => undefined | '' | null => column.placeholder
  return {
    cellChildren: column.render
      ? renderElement
      : v === undefined || (typeof v === 'string' && v.trim() === '') || v === null
      ? column.placeholder === undefined
        ? placeholder
        : column.placeholder
      : v,
    tdProps,
    rowSpan,
    colSpan,
  };
}
