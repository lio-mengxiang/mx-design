import { noop } from '@mx-design/web-utils';
// types
import type { Instance } from '../interface';

export function runModifierEffects(state: Instance['state'], instance: Instance, effectCleanupFns) {
  state.orderedModifiers.forEach(({ name, options = {}, effect }) => {
    if (typeof effect === 'function') {
      const cleanupFn = effect({ state, name, instance, options });
      effectCleanupFns.push(cleanupFn || noop);
    }
  });
}
