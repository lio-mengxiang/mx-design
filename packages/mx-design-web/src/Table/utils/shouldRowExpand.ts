import { isFunction } from '@mx-design/web-utils';
import { getOriginData } from './getOriginData';

export function shouldRowExpand({ expandProps, record, index, expandedRowRender }) {
  if ('rowExpandable' in expandProps && isFunction(expandProps.rowExpandable)) {
    return expandProps.rowExpandable(record);
  }

  if (!isFunction(expandedRowRender)) return false;

  return expandedRowRender(getOriginData(record), index) !== null;
}
