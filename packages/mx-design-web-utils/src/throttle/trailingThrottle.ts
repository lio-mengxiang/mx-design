export type TrailingThrottledFunction<T extends (...args: any[]) => any> = {
  (...args: Parameters<T>): void;
  cancel(): void;
};

export function trailingThrottle<T extends (...args: any[]) => any>(func: T, wait: number): TrailingThrottledFunction<T> {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const throttle = (...args: Parameters<T>) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func(...args);
      }, wait);
    }
  };

  throttle.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return throttle;
}
