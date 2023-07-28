import { useCallback, useEffect } from 'react';
import { debounce } from '@mx-design/web-utils';
import useMemoizedFn from './useMemoizedFn';

export const useDebounceFn = <T extends (...args: any) => any>(func: T, delay: number, immediate?: boolean) => {
  const callback = useMemoizedFn(func);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useCallback(debounce(callback, delay, !!immediate), [callback, delay, !!immediate]);
  useEffect(() => debounced.cancel, [debounced]);

  return debounced;
};
