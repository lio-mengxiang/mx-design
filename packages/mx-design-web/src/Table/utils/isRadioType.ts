import { RADIO } from '../constants';

export function isRadioType(rowSelection) {
  return rowSelection && rowSelection.type === RADIO;
}
