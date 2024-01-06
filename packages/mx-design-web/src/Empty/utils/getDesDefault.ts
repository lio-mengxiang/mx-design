import { DEFAULT_DES } from '../constants';

export function getDesDefault(description) {
  return typeof description === 'string' ? description : DEFAULT_DES;
}
