export function partial<T extends any[]>(func: Function, ...args: T): Function {
  return function partiallyApplied<T extends any[], R>(...moreArgs: T): R {
    return func(...args, ...moreArgs);
  };
}
