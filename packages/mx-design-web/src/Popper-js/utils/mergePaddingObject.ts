import type { SideObject } from '../interface';
import getFreshSideObject from './getFreshSideObject';

export function mergePaddingObject(paddingObject: Partial<SideObject>): SideObject {
  return {
    ...getFreshSideObject(),
    ...paddingObject,
  };
}
