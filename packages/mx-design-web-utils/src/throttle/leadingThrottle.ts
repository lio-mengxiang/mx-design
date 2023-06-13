export function leadingThrottle<T extends (...args: any) => any>(func: T, wait: number) {
  let previous = 0;

  const throttle = (...args: any[]) => {
    const now = Date.now();
    if (now - previous > wait) {
      func(args);
      previous = now;
    }
  };

  throttle.cancel = function () {
    previous = 0;
  };

  return throttle;
}
