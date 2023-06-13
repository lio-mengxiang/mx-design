import { useCallback, useEffect, useState } from 'react';
import { debounce } from '@mx-design/web-utils';
import type { SpinProps } from '../interface';

interface debounceLoadingProps {
  delay: SpinProps['delay'];
  propLoading: SpinProps['loading'];
}

export const useDebounceLoading = function (props: debounceLoadingProps): [boolean] {
  const { delay, propLoading } = props;

  const [loading, setLoading] = useState<boolean>(delay ? false : propLoading);

  const debouncedSetLoading = useCallback(debounce(setLoading, delay), [delay]);

  const getLoading = delay ? loading : propLoading;

  useEffect(() => {
    delay && debouncedSetLoading(propLoading);
    return () => {
      debouncedSetLoading?.cancel();
    };
  }, [debouncedSetLoading, delay, propLoading]);

  return [getLoading];
};
