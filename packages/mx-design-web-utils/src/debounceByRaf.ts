export function debounceByRaf(cb: (...args: any[]) => void) {
  let timer: null | number = null;

  const debounce = function (...args: any[]) {
    timer && window.cancelAnimationFrame(timer);
    timer = window.requestAnimationFrame(() => {
      cb(...args);
      timer = null;
    });
  };

  debounce.cancel = () => {
    window.cancelAnimationFrame(timer);
    timer = null;
  };

  return debounce;
}
