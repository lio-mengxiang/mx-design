import { isArray } from '@mx-design/web-utils';
import { INewRecord, TableProps } from '../interface';

export function isChildrenNotEmpty<T>({
  record,
  childrenColumnName,
}: {
  record: INewRecord<T>;
  childrenColumnName: TableProps['childrenColumnName'];
}) {
  return isArray(record[childrenColumnName]) && record[childrenColumnName].length;
}
