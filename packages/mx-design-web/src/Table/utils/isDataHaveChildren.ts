import { isArray } from '@mx-design/web-utils';

export function isChildrenNotEmpty({ expandProps, record, childrenColumnName }) {
  return isArray(record[childrenColumnName]) && record[childrenColumnName].length;
}
