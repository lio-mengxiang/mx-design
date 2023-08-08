import type { Placement } from '../interface';

const hash = { start: 'end', end: 'start' };

export function getOppositeVariationPlacement(placement: Placement): Placement {
  return placement.replace(/start|end/g, (matched) => hash[matched]) as Placement;
}
