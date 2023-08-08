import { bottom, top, start, right, left } from '../constants';
import { detectOverflow, getBasePlacement, getOppositePlacement, getOppositeVariationPlacement, getVariation } from '../utils';
// type
import type { ModifierArguments, Modifier, Padding, Placement, Boundary, RootBoundary } from '../interface';

export type Options = {
  mainAxis: boolean;
  altAxis: boolean;
  fallbackPlacements: Array<Placement>;
  padding: Padding;
  boundary: Boundary;
  rootBoundary: RootBoundary;
  allowedAutoPlacements: Array<Placement>;
};

function getExpandedFallbackPlacements(placement: Placement): Array<Placement> {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip({ state, options, name }: ModifierArguments<Options>) {
  if (state.modifiersData[name]._skip) {
    return;
  }

  const {
    mainAxis: checkMainAxis = true,
    altAxis: checkAltAxis = true,
    fallbackPlacements: specifiedFallbackPlacements,
    padding,
    boundary,
    rootBoundary,
  } = options;

  const preferredPlacement = state.options.placement;
  const basePlacement = getBasePlacement(preferredPlacement);
  const isBasePlacement = basePlacement === preferredPlacement;

  const fallbackPlacements =
    specifiedFallbackPlacements ||
    (isBasePlacement ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));

  const placements = [preferredPlacement, ...fallbackPlacements];
  const referenceRect = state.rects.reference;
  const popperRect = state.rects.popper;

  const checksMap = new Map();
  let makeFallbackChecks = true;
  let firstFittingPlacement = placements[0];

  for (let i = 0; i < placements.length; i++) {
    const placement = placements[i];
    const basePlacement = getBasePlacement(placement);
    const isStartVariation = getVariation(placement) === start;
    const isVertical = [top, bottom].indexOf(basePlacement) >= 0;
    const len = isVertical ? 'width' : 'height';

    const overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      padding,
    });

    let mainVariationSide: any = isVertical ? (isStartVariation ? right : left) : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    const altVariationSide: any = getOppositePlacement(mainVariationSide);

    const checks = [];

    if (checkMainAxis) {
      checks.push(overflow[basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every((check) => check)) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    const numberOfChecks = 1;

    for (let i = numberOfChecks; i > 0; i--) {
      const fittingPlacement = placements.find((placement) => {
        const checks = checksMap.get(placement);
        if (checks) {
          return checks.slice(0, i).every((check) => check);
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        break;
      }
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}

export type FlipModifier = Modifier<'flip', Options>;
export default {
  name: 'flip',
  enabled: true,
  fn: flip,
  data: { _skip: false },
} as FlipModifier;
