import { useCallback, useEffect } from 'react';
import { debounce } from '@mx-design/web-utils';
import { useEvent } from './useEvent';

interface IDebounced<T extends (...args: any) => any> {
  cancel: () => void;
  (...args: any[]): ReturnType<T>;
}

export const useDebounceFn = <T extends (...args: any) => any>(func: T, delay: number, immediate?: boolean) => {
  const callback = useEvent(func);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced: IDebounced<T> = useCallback(debounce(callback, delay, !!immediate), [callback, delay, !!immediate]);
  useEffect(() => debounced.cancel, [debounced]);

  return debounced;
};
