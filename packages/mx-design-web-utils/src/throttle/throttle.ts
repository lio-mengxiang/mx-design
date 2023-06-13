import { leadingThrottle } from './leadingThrottle';
import { trailingThrottle } from './trailingThrottle';

interface IOptions {
  leading?: boolean;
  trailing?: boolean;
}

export function throttle<T extends (...args: any) => any>(func: T, wait: number, options: IOptions) {
  if (options.trailing) {
    return trailingThrottle(func, wait);
  } else {
    return leadingThrottle(func, wait);
  }
}
