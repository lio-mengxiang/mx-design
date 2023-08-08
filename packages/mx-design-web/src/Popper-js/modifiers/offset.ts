import { top, left, right, placements } from '../constants';
import { getBasePlacement } from '../utils';
// type
import type { ModifierArguments, Modifier, Rect, Offsets, Placement } from '../interface';

export type OffsetsFunction = ({
  popper,
  reference,
  placement,
}: {
  popper: Rect;
  reference: Rect;
  placement: Placement;
}) => [number, number];

type Offset = OffsetsFunction | [number, number];

export type Options = {
  offset: Offset;
};

export function distanceAndSkiddingToXY(placement: Placement, rects: { popper: Rect; reference: Rect }, offset: Offset): Offsets {
  const basePlacement = getBasePlacement(placement);
  const invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  let [skidding, distance] =
    typeof offset === 'function'
      ? offset({
          ...rects,
          placement,
        })
      : offset;

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;

  return [left, right].indexOf(basePlacement) >= 0 ? { x: distance, y: skidding } : { x: skidding, y: distance };
}

function offset({ state, options, name }: ModifierArguments<Options>) {
  const { offset = [0, 0] } = options;

  const data = placements.reduce((acc, placement) => {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});

  const { x, y } = data[state.placement];

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
}

export type OffsetModifier = Modifier<'offset', Options>;
export default {
  name: 'offset',
  enabled: true,
  fn: offset,
} as OffsetModifier;
