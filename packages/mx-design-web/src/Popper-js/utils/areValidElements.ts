export function areValidElements(...args: Array<any>): boolean {
  console.log('element: ', args);

  return !args.some((element) => !(element && typeof element.getBoundingClientRect === 'function'));
}
