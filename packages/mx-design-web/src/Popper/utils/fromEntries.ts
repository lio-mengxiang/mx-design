export const fromEntries = (entries: Array<[string, any]>): { [key: string]: any } =>
  entries.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
