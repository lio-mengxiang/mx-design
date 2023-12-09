import { isFunction } from '@mx-design/web-utils';
import { ReactNode } from 'react';
import type { ExpandProps, INewRecord } from '../interface';

export function shouldRowExpand<T>({
  expandProps,
  record,
  index,
  er,
}: {
  expandProps: ExpandProps<T>;
  record: INewRecord<T>;
  index: number;
  er: (r: any, i: any) => ReactNode;
}) {
  if (isFunction(expandProps?.rowExpandable)) {
    return expandProps.rowExpandable(record);
  }

  return isFunction(er) && er(record, index) !== null;
}
