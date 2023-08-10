import { top, left } from '../constants';
import { getBasePlacement, getDocumentElement, getOffsetParent, getVariation } from '../utils';
// type
import type { PositioningStrategy, Modifier, ModifierArguments, Rect, BasePlacement, Variation } from '../interface';
import { unsetSides } from './computeStyles';

export function mapToStyles({
  popper,
  offsets,
  position,
}: {
  popper: HTMLElement;
  popperRect: Rect;
  placement: BasePlacement;
  variation?: Variation;
  offsets: Partial<{ x: number; y: number; centerOffset: number }>;
  position: PositioningStrategy;
}) {
  const { x = 0, y = 0 } = offsets;

  let offsetParent = getOffsetParent(popper);
  let heightProp = 'clientHeight';
  let widthProp = 'clientWidth';

  if (offsetParent === window) {
    offsetParent = getDocumentElement(popper);

    if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
      heightProp = 'scrollHeight';
      widthProp = 'scrollWidth';
    }
  }

  const commonStyles = {
    position,
    ...unsetSides,
  };

  return {
    ...commonStyles,
    [top]: `${y}px`,
    [left]: `${x}px`,
    transform: '',
  };
}
function computeStyles({ state }: ModifierArguments<any>) {
  const commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = {
      ...state.styles.popper,
      ...mapToStyles({
        ...commonStyles,
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
      }),
    };
  }

  state.attributes.popper = {
    ...state.attributes.popper,
    'data-popper-placement': state.placement,
  };
}

export type ComputeStylesModifier = Modifier<'computeStyles', any>;
export default {
  name: 'computeStyles',
  enabled: true,
  fn: computeStyles,
  data: {},
} as ComputeStylesModifier;
