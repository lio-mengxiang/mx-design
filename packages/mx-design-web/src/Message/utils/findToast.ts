import { getToastPosition } from './getPosition';

export function findToast<T>(state: T, id: number) {
  const position = getToastPosition(state, id);

  const index = position ? state[position].findIndex((toast) => toast.id === id) : -1;

  return {
    position,
    index,
  };
}
