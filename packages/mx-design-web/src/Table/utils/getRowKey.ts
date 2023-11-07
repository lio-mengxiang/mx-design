import { getOriginData } from './getOriginData';

export function getRowKey(rowKey, record, index) {
  if (typeof rowKey === 'function') {
    return rowKey(getOriginData(record));
  }

  return record[rowKey] || index;
}
