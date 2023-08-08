import type { ModifierArguments, Modifier } from '../interface';
import { computeOffsets } from '../utils';

function popperOffsets({ state, name }: ModifierArguments<{}>) {
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement,
  });
}

export type PopperOffsetsModifier = Modifier<'popperOffsets', {}>;
export default {
  name: 'popperOffsets',
  enabled: true,
  fn: popperOffsets,
  data: {},
} as PopperOffsetsModifier;
