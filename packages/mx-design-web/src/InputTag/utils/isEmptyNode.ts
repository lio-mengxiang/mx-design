import type { ReactNode } from 'react';

export function isEmptyNode(node: ReactNode): boolean {
  return node === null || node === undefined;
}
