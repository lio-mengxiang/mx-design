import { useRef, useEffect } from 'react';

export function useUpdate(fn, deps = []) {
  const isDidMount = useRef(false);

  useEffect(() => {
    if (isDidMount.current) {
      fn();
    } else {
      isDidMount.current = true;
    }
  }, [...deps]);
}
