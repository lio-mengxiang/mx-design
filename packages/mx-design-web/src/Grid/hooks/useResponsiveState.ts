import { useEffect, useRef, useState, useMemo } from 'react';
import { isObject } from '@mx-design/web-utils';

import { ResponsiveValue } from '../interface';
import type { ScreenMap } from '../../utils/interface';
import { responsiveObserve } from '../../utils';
import { responsiveArray } from '../../utils/constants';

export const useResponsiveState = (val: number | ResponsiveValue, defaultValue: number, fallbackToXs = false) => {
  const token = useRef<string>();
  const [screens, setScreens] = useState<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
    xxxl: true,
  });
  useEffect(() => {
    token.current = responsiveObserve.subscribe((screens) => {
      if (isObject(val)) {
        setScreens(screens);
      }
    });

    return () => {
      responsiveObserve.unsubscribe(token.current);
    };
  }, []);

  const result = useMemo(() => {
    let res = defaultValue;
    if (isObject(val)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if ((screens[breakpoint] || (breakpoint === 'xs' && fallbackToXs)) && val[breakpoint] !== undefined) {
          res = val[breakpoint] as number;
          break;
        }
      }
    } else {
      res = val;
    }
    return res;
  }, [screens, val, defaultValue, fallbackToXs]);
  return result;
};
