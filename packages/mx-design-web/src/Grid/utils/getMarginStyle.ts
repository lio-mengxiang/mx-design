import type { Breakpoint } from '../../utils/interface';
import type { GridRowGutter } from '../interface';
import { getGutter } from './getGutter';

export function getMarginStyle(gutter: GridRowGutter | GridRowGutter[], screens: Partial<Record<Breakpoint, boolean>>, div: boolean) {
  const marginStyle: {
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
  } = {};
  const gutterHorizontal = getGutter(Array.isArray(gutter) ? gutter[0] : gutter, screens);
  const gutterVertical = getGutter(Array.isArray(gutter) ? gutter[1] : 0, screens);

  if ((gutterHorizontal || gutterVertical) && !div) {
    const marginHorizontal = -gutterHorizontal / 2;
    const marginVertical = -gutterVertical / 2;
    if (marginHorizontal) {
      marginStyle.marginLeft = marginHorizontal;
      marginStyle.marginRight = marginHorizontal;
    }
    if (marginVertical) {
      marginStyle.marginTop = marginVertical;
      marginStyle.marginBottom = marginVertical;
    }
  }
  return {
    gutterHorizontal,
    gutterVertical,
    marginStyle,
  };
}
