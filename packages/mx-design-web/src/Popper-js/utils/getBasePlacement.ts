import type { BasePlacement, Placement } from '../interface';

export function getBasePlacement(placement: Placement): BasePlacement {
  return placement.split('-')[0] as BasePlacement;
}
