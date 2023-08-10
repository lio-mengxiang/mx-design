// code form @popper-js（Modify parts of the source code）
import { log } from '@mx-design/web-utils';
import { areValidElements, getCompositeRect, getOffsetParent, mergeByName } from './utils';
import getLayoutRect from './utils/getLayoutRect';
import { INVALID_ELEMENT_ERROR } from './constants';
import debounce from './debounce';
import { computeAffixStyles, offset, popperOffsets } from './modifiers';
// type
import type { State, OptionsGeneric, Instance, VirtualElement, Options } from './interface';

const defaultModifiers = [popperOffsets, computeAffixStyles, offset];

const DEFAULT_OPTIONS = {
  placement: 'bottom' as const,
  modifiers: [],
  strategy: 'absolute' as const,
};

export function createAffixPopper(
  reference: Element | VirtualElement,
  popper: HTMLElement,
  options: Partial<OptionsGeneric<any>> = {}
): Instance {
  let state: Partial<Instance['state']> = {
    placement: 'bottom',
    orderedModifiers: mergeByName([...defaultModifiers, ...options.modifiers]),
    options: { ...DEFAULT_OPTIONS, ...options },
    modifiersData: {},
    elements: {
      reference,
      popper,
    },
    attributes: {},
    styles: {},
  };

  let isDestroyed = false;

  const instance = {
    state,
    setOptions(options: OptionsGeneric<any>) {
      state.options = {
        ...state.options,
        ...options,
      };

      return instance.update();
    },

    // Sync update – it will always be executed, even if not necessary. This
    // is useful for low frequency updates where sync behavior simplifies the
    // logic.
    // For high frequency updates (e.g. `resize` and `scroll` events), always
    // prefer the async Popper#update method
    forceUpdate() {
      if (isDestroyed) {
        return;
      }

      const { reference, popper } = state.elements;

      // Validate reference and popper us element type
      if (!areValidElements(reference, popper)) {
        log.error(INVALID_ELEMENT_ERROR);
        return;
      }

      state.rects = {
        reference: getCompositeRect(reference, getOffsetParent(popper), options.strategy),
        popper: getLayoutRect(popper),
      };

      state.placement = state.options.placement;

      // On each update cycle, the `modifiersData` property for each modifier
      // is filled with the initial data specified by the modifier. This means
      // it doesn't persist and is fresh on each update.
      // To ensure persistent data, use `${name}#persistent`
      state.orderedModifiers.forEach(
        // eslint-disable-next-line no-return-assign
        (modifier) =>
          (state.modifiersData[modifier.name] = {
            ...modifier.data,
          })
      );

      for (let index = 0; index < state.orderedModifiers.length; index++) {
        if (state.reset === true) {
          state.reset = false;
          index = -1;
          continue;
        }

        const { fn, options = {}, name } = state.orderedModifiers[index];

        if (typeof fn === 'function') {
          state = fn({ state, options, name, instance } as { state: State; instance: Instance; options: Options; name: string }) || state;
        }
      }
    },

    // Async and optimistically optimized update – it will not be executed if
    // not necessary (debounced to run at most once-per-tick)
    update: debounce<State>(
      () =>
        new Promise<Partial<Instance['state']>>((resolve) => {
          instance.forceUpdate();
          resolve(state);
        })
    ),

    destroy() {
      isDestroyed = true;
    },
  };

  return instance as Instance;
}
