import { getOriginData } from './getOriginData';

export function getRowKey(rowKey, record) {
  if (typeof rowKey === 'function') {
    return rowKey(getOriginData(record));
  }

  return record[rowKey];
}
