import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from './isBrowser';

// Because useLayoutEffect in the ssr environment will report a warning
// So when you need to use useLayoutEffect, use useIsomorphicLayoutEffect instead, it will use useEffect in the ssr environment to avoid this problem
export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;
