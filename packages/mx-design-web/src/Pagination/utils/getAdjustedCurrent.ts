import { getAllPages } from './getAllPages';

export function getAdjustedCurrent(newPageSize, newTotal, current) {
  const newAllPages = getAllPages(newPageSize, newTotal);
  if (newAllPages < 1) return 1;
  if (current > newAllPages) return newAllPages;
  return current;
}
