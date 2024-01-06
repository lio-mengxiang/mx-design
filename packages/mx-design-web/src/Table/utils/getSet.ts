import type { Key } from 'react';

export function getSet(arr: Key[]) {
  return [...new Set(arr)];
}
