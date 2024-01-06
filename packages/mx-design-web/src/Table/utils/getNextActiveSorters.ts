import { isNumber } from '@mx-design/web-utils';
// type
import type { SorterInfo } from '../interface';

export function getNextActiveSorters(sorter: SorterInfo, activeSorters: SorterInfo[]) {
  const { field, direction } = sorter;
  /** if sorter is in activeSorters */

  if (activeSorters.find((item) => item.field === field)) {
    if (!direction) {
      return activeSorters.filter((item) => item.field !== field);
    }
    return activeSorters.map((item) => (item.field === field ? sorter : item));
  }
  /** if sorter is not in activeSorters */

  // if this sorter does not has priority or every sorter does not has priority in activeSorters, it represent single sort
  if (!isNumber(sorter.priority) || activeSorters.find((item) => !isNumber(item.priority))) {
    return [sorter];
  }

  // multiple field sort
  return [...activeSorters, sorter];
}
