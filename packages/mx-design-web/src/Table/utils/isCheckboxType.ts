import { CHECKBOX, TYPE } from '../constants';

export function isCheckboxType(rowSelection) {
  return (rowSelection && rowSelection.type === CHECKBOX) || (rowSelection && !(TYPE in rowSelection));
}
