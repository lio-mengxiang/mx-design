import type { Rect, ClientRectObject } from '../interface';

export function rectToClientRect(rect: Rect): ClientRectObject {
  return {
    ...rect,
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  };
}
