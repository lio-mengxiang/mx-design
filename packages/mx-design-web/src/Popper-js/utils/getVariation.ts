import type { Placement, Variation } from '../interface';

export function getVariation(placement: Placement): Variation {
  return placement.split('-')[1] as Variation;
}
