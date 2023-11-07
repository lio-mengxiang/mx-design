import { CHECK_ALL } from '../constants';

export function isCheckAllType(rowSelection) {
  return rowSelection && CHECK_ALL in rowSelection ? rowSelection.checkAll : true;
}
