import { useReducer } from 'react';

export function useForceUpdate() {
  const [, dispatch] = useReducer((v) => v + 1, 0);
  return dispatch;
}
