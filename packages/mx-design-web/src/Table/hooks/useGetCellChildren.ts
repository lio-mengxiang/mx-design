import { get } from '@mx-design/web-utils';
import { useMemo } from 'react';
import { getOriginData } from '../utils';

export function useGetCellChildren({ column, record, trIndex, placeholder }) {
  const renderElement = useMemo(
    () => column.render?.(get(record, column.dataIndex), getOriginData(record), trIndex),
    [record, column, trIndex]
  );

  const v = get(record, column.dataIndex);

  // Check column.render => undefined | '' | null => column.placeholder
  return column.render
    ? renderElement
    : v === undefined || (typeof v === 'string' && v.trim() === '') || v === null
    ? column.placeholder === undefined
      ? placeholder
      : column.placeholder
    : v;
}
