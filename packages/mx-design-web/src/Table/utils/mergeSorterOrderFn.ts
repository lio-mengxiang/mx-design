import { isNumber } from '@mx-design/web-utils';
import { DEFAULT_SORT_ORDER, SORT_ORDER, SORT_ORDER_ARRAY } from '../constants';
import { getSorterFn } from './getSorterFn';
import { getSorterPriority } from './getSorterPriority';
// type
import type { SorterInfo } from '../interface';

export function mergeSorterOrderFn(column, innerDataIndex, result) {
  if (SORT_ORDER in column && SORT_ORDER_ARRAY.includes(column[SORT_ORDER])) {
    setSortOrder({
      innerDataIndex,
      direction: column.sortOrder,
      column,
      priority: getSorterPriority(column.sorter),
      sorterOrderCollect: result,
      collectName: SORT_ORDER,
    });
  }

  if (DEFAULT_SORT_ORDER in column && SORT_ORDER_ARRAY.includes(column[DEFAULT_SORT_ORDER])) {
    setSortOrder({
      innerDataIndex,
      direction: column.defaultSortOrder,
      column,
      priority: getSorterPriority(column.sorter),
      sorterOrderCollect: result,
      collectName: DEFAULT_SORT_ORDER,
    });
  }
  return result;
}

function setSortOrder({ innerDataIndex, direction, column, priority, sorterOrderCollect, collectName }) {
  const sorter: SorterInfo = {
    field: innerDataIndex,
    direction,
    sorterFn: getSorterFn(column.sorter),
    priority,
  };

  if (isNumber(priority) && sorterOrderCollect[collectName].every((item) => isNumber(item.priority))) {
    sorterOrderCollect[collectName].push(sorter);
  } else {
    sorterOrderCollect[collectName] = [sorter];
  }
}
