export const frGetter = (value) => {
  if (!value) return;
  return typeof value === 'number' ? `repeat(${value}, 1fr)` : value;
};
