import type { Modifier } from '../interface';

export function mergeByName(modifiers: Array<Modifier<any, any>>): Array<Modifier<any, any>> {
  const merged = modifiers.reduce((merged, current) => {
    const existing = merged[current.name];
    merged[current.name] = existing
      ? {
          ...existing,
          ...current,
          options: { ...existing.options, ...current.options },
          data: { ...existing.data, ...current.data },
        }
      : current;
    return merged;
  }, {});

  return Object.keys(merged).map((key) => merged[key]);
}
