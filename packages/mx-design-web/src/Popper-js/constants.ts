import { BasePlacement, Placement } from './interface';

export const top = 'top';
export const bottom = 'bottom';
export const right = 'right';
export const left = 'left';
export const start = 'start';
export const end = 'end';
export const clippingParents = 'clippingParents';
export const popper = 'popper';
export const reference = 'reference';
export const viewport = 'viewport';
export const basePlacements: Array<BasePlacement> = [top, bottom, right, left];
export const placements = [...basePlacements].reduce(
  (acc: Array<Placement>, placement: BasePlacement): Array<Placement> =>
    acc.concat([placement, `${placement}-${start}`, `${placement}-${end}`]),
  []
);

export const INVALID_ELEMENT_ERROR =
  'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
