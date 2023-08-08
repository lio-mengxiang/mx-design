import type { Placement } from '../interface';

export function getMainAxisFromPlacement(placement: Placement): 'x' | 'y' {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
