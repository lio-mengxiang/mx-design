import { top, left, right, bottom, end } from '../constants';
import { getBasePlacement, getDocumentElement, getOffsetParent, getVariation } from '../utils';
// type
import type { PositioningStrategy, Offsets, Modifier, ModifierArguments, Rect, BasePlacement, Variation } from '../interface';

export const unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
};

// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
export function roundOffsetsByDPR({ x, y }, win: Window): Offsets {
  const dpr = win.devicePixelRatio || 1;

  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0,
  };
}

export function mapToStyles({
  popper,
  popperRect,
  placement,
  variation,
  offsets,
  position,
  isFixed,
}: {
  popper: HTMLElement;
  popperRect: Rect;
  placement: BasePlacement;
  variation?: Variation;
  offsets: Partial<{ x: number; y: number; centerOffset: number }>;
  position: PositioningStrategy;
  isFixed: boolean;
}) {
  let { x = 0, y = 0 } = offsets;

  // eslint-disable-next-line no-prototype-builtins
  const hasX = offsets.hasOwnProperty('x');
  // eslint-disable-next-line no-prototype-builtins
  const hasY = offsets.hasOwnProperty('y');

  const sideX: string = left;
  const sideY: string = top;

  const win: Window = window;

  // let offsetParent = getOffsetParent(popper);
  // let heightProp = 'clientHeight';
  // let widthProp = 'clientWidth';

  // if (offsetParent === window) {
  //   offsetParent = getDocumentElement(popper);

  //   if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
  //     heightProp = 'scrollHeight';
  //     widthProp = 'scrollWidth';
  //   }
  // }

  // if (placement === top || ((placement === left || placement === right) && variation === end)) {
  //   // Positioning reference change
  //   sideY = bottom;
  //   const offsetY = offsetParent[heightProp];
  //   y -= offsetY - popperRect.height;
  // }

  // if (placement === left || ((placement === top || placement === bottom) && variation === end)) {
  //   // Positioning reference change
  //   sideX = right;
  //   const offsetX = offsetParent[widthProp];
  //   x -= offsetX - popperRect.width;
  // }

  const commonStyles = {
    position,
    // ...unsetSides,
  };

  ({ x, y } = roundOffsetsByDPR({ x, y }, window));

  return {
    ...commonStyles,
    [sideY]: hasY ? '0' : '',
    [sideX]: hasX ? '0' : '',
    // Layer acceleration can disable subpixel rendering which causes slightly
    // blurry text on low PPI displays, so we want to use 2D transforms
    // instead
    transform: (win.devicePixelRatio || 1) <= 1 ? `translate(${x}px, ${y}px)` : `translate3d(${x}px, ${y}px, 0)`,
  };
}

function computeStyles({ state }: ModifierArguments<any>) {
  const commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    isFixed: state.options.strategy === 'fixed',
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
