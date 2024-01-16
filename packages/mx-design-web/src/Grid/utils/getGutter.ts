import { isObject } from '@mx-design/web-utils';
import { responsiveArray } from '../../utils/constants';
// type
import type { GridRowGutter } from '../interface';
import type { Breakpoint } from '../../utils/interface';

export function getGutter(gutter: GridRowGutter, screens: Partial<Record<Breakpoint, boolean>>): number {
  if (isObject(gutter)) {
    for (let i = 0; i < responsiveArray.length; i++) {
      const breakpoint: Breakpoint = responsiveArray[i];
      if (screens[breakpoint] && gutter[breakpoint] !== undefined) {
        return gutter[breakpoint] as number;
      }
    }
  } else {
    return gutter;
  }

  return 0;
}
