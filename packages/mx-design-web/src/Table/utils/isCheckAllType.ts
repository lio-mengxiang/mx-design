import { CHECK_ALL } from '../constants';
import { TableProps } from '../interface';

export function isCheckAllType(rowSelection: TableProps['rowSelection']): boolean {
  return rowSelection && CHECK_ALL in rowSelection ? rowSelection.checkAll : true;
}
