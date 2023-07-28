import { findById } from './findById';
import type { IPosition } from '../../Notification';

export function getToastPosition<T>(state: T, id: number) {
  for (const [position, values] of Object.entries(state)) {
    if (findById(values, id)) {
      return position as IPosition;
    }
  }
}
