import type { Placement } from '../interface';

const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };

export function getOppositePlacement(placement: Placement): Placement {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash[matched]) as Placement;
}
