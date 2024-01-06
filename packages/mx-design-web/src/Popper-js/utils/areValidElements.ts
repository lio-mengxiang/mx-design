export function areValidElements(...args: Array<any>): boolean {
  return !args.some((element) => !(element && typeof element.getBoundingClientRect === 'function'));
}
