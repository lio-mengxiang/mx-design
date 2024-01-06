export function trailingThrottle<T extends (...args: any) => any>(func: T, wait: number) {
  let timeout = null;

  const throttle = (...args: any[]) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func(args);
      }, wait);
    }
  };

  throttle.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return throttle;
}
