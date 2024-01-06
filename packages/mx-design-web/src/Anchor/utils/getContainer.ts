import { isString } from '@mx-design/web-utils';
import { findNode } from './findNode';

export function getContainer(targetContainer?: string | HTMLElement | Window): HTMLElement | Window {
  if (isString(targetContainer)) {
    return findNode(document, targetContainer as string);
  }
  return (targetContainer as HTMLElement | Window) || window;
}
