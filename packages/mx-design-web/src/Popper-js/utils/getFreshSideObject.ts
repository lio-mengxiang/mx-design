import type { SideObject } from '../interface';

export default function getFreshSideObject(): SideObject {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
}
