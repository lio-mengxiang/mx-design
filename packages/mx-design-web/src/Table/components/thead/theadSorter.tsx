import React from 'react';
import { cs, isFunction } from '@mx-design/web-utils';
import { IconArrowDownFilling, IconArrowUpFilling } from '../../../Icon';
import { ASCEND, DESCEND, SORT_ORDER, SORT_TYPES_ARRAY } from '../../constants';
import type { InternalColumnProps } from '../../interface';

export function TheadSorter<T>({
  sortType,
  sorter,
  column,
  onSort,
  currentSorter,
  prefixCls,
}: {
  sortType: InternalColumnProps<T>['sortType'];
  sorter: InternalColumnProps<T>['sorter'];
  column: InternalColumnProps<T>;
  onSort: InternalColumnProps<T>['onSort'];
  currentSorter: InternalColumnProps<T>['currentSorter'];
  prefixCls: string;
}) {
  const direction = currentSorter?.direction;
  const enableSort = (sorter && SORT_TYPES_ARRAY.includes(sortType)) || SORT_ORDER in column;

  return (
    <>
      {enableSort ? (
        <div className={`${prefixCls}-sorter`}>
          <IconArrowUpFilling
            onClick={() => {
              if (isFunction(column.handleAscendSort)) {
                column.handleAscendSort(direction);
              }

              if (direction !== ASCEND) {
                onSort(ASCEND, column);
              } else {
                onSort(undefined, column);
              }
            }}
            className={cs(`${prefixCls}-sorter-top`, {
              [`${prefixCls}-sorter-active`]: direction === ASCEND,
            })}
          />
          <IconArrowDownFilling
            onClick={() => {
              if (isFunction(column.handleDescendSort)) {
                column.handleDescendSort(direction);
              }

              if (direction !== DESCEND) {
                onSort(DESCEND, column);
              } else {
                onSort(undefined, column);
              }
            }}
            className={cs(`${prefixCls}-sorter-bottom`, {
              [`${prefixCls}-sorter-active`]: direction === DESCEND,
            })}
          />
        </div>
      ) : null}
    </>
  );
}
