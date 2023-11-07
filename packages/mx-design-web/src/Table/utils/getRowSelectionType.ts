import { CHECKBOX, RADIO } from '../constants';

export function getRowSelectionType(isCheckbox, isRadio) {
  if (isCheckbox) return CHECKBOX;
  if (isRadio) return RADIO;
  return undefined;
}
