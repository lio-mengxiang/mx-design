import { useEffect, useState } from 'react';

export function useStateWithPromise<T>(defaultVal: T): [T, (updater: any) => Promise<T>] {
  const [state, setState] = useState({
    value: defaultVal,
    resolve: (e) => {
      e;
    },
  });

  useEffect(() => {
    state.resolve(state.value);
  }, [state]);

  return [
    state.value,
    (updater) =>
      new Promise((resolve) => {
        setState((prevState) => {
          let nextVal = updater;
          if (typeof updater === 'function') {
            nextVal = updater(prevState.value);
          }
          return {
            value: nextVal,
            resolve,
          };
        });
      }),
  ];
}
