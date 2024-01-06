import type { IPosition } from '../interface';
import { findById } from './findById';

export function getToastPosition<T>(state: T, id: number) {
  // eslint-disable-next-line no-restricted-syntax
  for (const [position, values] of Object.entries(state)) {
    if (findById(values, id)) {
      return position as IPosition;
    }
  }
}
