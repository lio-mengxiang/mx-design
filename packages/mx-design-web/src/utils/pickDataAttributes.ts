export function pickDataAttributes<T extends object, K extends keyof T>(obj: T): { [key in K]: any } {
  const clone = {} as { [key in K]: any };

  obj &&
    Object.keys(obj).forEach((key) => {
      const k = String(key);
      if (k.indexOf('data-') === 0) {
        clone[k] = obj[k];
      }
      if (k.indexOf('aria-') === 0) {
        clone[k] = obj[k];
      }
    });

  return clone;
}
