// copied from
// https://github.com/react-component/util/blob/master/src/hooks/useEvent.ts
import * as React from 'react';

export function useEvent<T extends Function>(callback?: T): T {
  const fnRef = React.useRef<any>();
  fnRef.current = callback;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoFn = React.useCallback<T>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((...args: any) => fnRef.current?.(...args)) as any,
    []
  );

  return memoFn;
}
