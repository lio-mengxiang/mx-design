export function callFuncWithDelay({
  visibleTimer,
  delay,
  callback,
}: {
  delay?: number;
  callback: Function;
  visibleTimer: { current: any };
}) {
  if (delay) {
    clearTimeout(visibleTimer.current);
    visibleTimer.current = setTimeout(callback, delay);
  } else {
    callback();
  }
}
