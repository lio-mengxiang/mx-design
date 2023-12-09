import { DESCEND } from '../constants';
import type { SortDirection, SorterFn } from '../interface';

export function sortCompare(fn: SorterFn, direction: SortDirection) {
  return (a, b) => {
    const result = fn(a, b);
    return direction === DESCEND ? -result : result;
  };
}
// const data = [
//   { salary: 1, age: 23 },
//   { salary: 1, age: 33 },
//   { salary: 1, age: 12 },
//   { salary: 7, age: 2 },
//   { salary: 7, age: 12 },
//   { salary: 7, age: 3 },
// ];
// const compareSorter = [{ sortFn: (a, b) => a.salary - b.salary }, { sortFn: (a, b) => a.age - b.age }];
// data.sort((a, b) => {
//   for (let i = 0; i < compareSorter.length; i++) {
//     const { sortFn } = compareSorter[i];
//     const result = sortFn(a, b);
//     if (result !== 0) return result;
//   }
//   return 0;
// });
