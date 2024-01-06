import { clippingParents, reference, popper, bottom, top, right, basePlacements, viewport } from '../constants';
import { computeOffsets } from './computeOffsets';
import { expandToHashMap } from './expandToHashMap';
import { getBoundingClientRect } from './getBoundingClientRect';
import { getClippingRect } from './getClippingRect';
import { mergePaddingObject } from './mergePaddingObject';
import { rectToClientRect } from './rectToClientRect';
// type
import type { Placement, Boundary, RootBoundary, Context, State, SideObject, Padding, PositioningStrategy } from '../interface';

export type Options = {
  placement: Placement;
  strategy: PositioningStrategy;
  boundary: Boundary;
  rootBoundary: RootBoundary;
  elementContext: Context;
  altBoundary: boolean;
  padding: Padding;
};

export function detectOverflow(state: Partial<State>, options: Partial<Options> = {}): SideObject {
  const {
    placement = state.placement,
    strategy = state.strategy,
    boundary = clippingParents,
    rootBoundary = viewport,
    elementContext = popper,
    altBoundary = false,
    padding = 0,
  } = options;

  const paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));

  const altContext = elementContext === popper ? reference : popper;

  const popperRect = state.rects.popper;
  const element = state.elements[altBoundary ? altContext : elementContext];

  // The regions where popper or reference is not occluded are calculated
  const clippingClientRect = getClippingRect(element as any, boundary, rootBoundary, strategy);

  const referenceClientRect = getBoundingClientRect(state.elements.reference);

  const popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement,
  });

  const popperClientRect = rectToClientRect({
    ...popperRect,
    ...popperOffsets,
  });

  const elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;

  // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect
  const overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right,
  };

  const offsetData = state.modifiersData.offset;

  // Offsets can be applied only to the popper element
  if (elementContext === popper && offsetData) {
    const offset = offsetData[placement];

    Object.keys(overflowOffsets).forEach((key) => {
      const multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      const axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
