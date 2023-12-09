import { isNumber, isObject } from '@mx-design/web-utils';
import { ColumnProps } from '../interface';

export function getSorterPriority(sorter: ColumnProps['sorter']): number | undefined {
  if (isObject(sorter) && isNumber((sorter as Record<string, any>).multiple)) {
    return (sorter as Record<string, any>).multiple;
  }
}
