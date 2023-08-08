import type { Func } from '../interface';

export function cleanupModifierEffects(effectCleanupFns: Func[]) {
  effectCleanupFns.forEach((fn) => fn());
  effectCleanupFns = [];
}
