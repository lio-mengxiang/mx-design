import React from 'react';
import { isString } from '@mx-design/web-utils';
import { useComponent, useThClassNames } from '../../hooks';
import { getThProps } from '../../utils';
import { TheadFilter } from './theadFilter';
import { TheadSorter } from './theadSorter';
// type
import type { InternalColumnProps, TheadProps } from '../../interface';

function Column<T>({
  title,
  columnFixedStyle,
  className,
  headerCellStyle,
  rowSpan,
  colSpan,
  headerCellProps,
  prefixCls,
  align = 'left',
  components,
  ellipsis,
  column,
  filterDropdown,
  sorter,
  sortType = 'all',
  _key,
  innerFiltersValue,
  onHandleFilter,
  filterDropdownProps,
  filterIcon,
  titleClassName,
  onSort,
  currentSorter,
}: {
  title?: InternalColumnProps<T>['title'];
  columnFixedStyle?: InternalColumnProps<T>['columnFixedStyle'];
  className?: InternalColumnProps<T>['className'];
  headerCellStyle?: InternalColumnProps<T>['headerCellStyle'];
  rowSpan?: InternalColumnProps<T>['rowSpan'];
  colSpan?: InternalColumnProps<T>['colSpan'];
  headerCellProps?: InternalColumnProps<T>['headerCellProps'];
  prefixCls: string;
  align?: InternalColumnProps<T>['align'];
  components?: InternalColumnProps<T>['components'];
  ellipsis?: InternalColumnProps<T>['ellipsis'];
  filterDropdown?: InternalColumnProps<T>['filterDropdown'];
  sorter?: InternalColumnProps<T>['sorter'];
  sortType?: InternalColumnProps<T>['sortType'];
  _key: InternalColumnProps<T>['_key'];
  innerFiltersValue: TheadProps<T>['innerFiltersValue'];
  onHandleFilter?: InternalColumnProps<T>['onHandleFilter'];
  filterDropdownProps?: InternalColumnProps<T>['filterDropdownProps'];
  filterIcon?: InternalColumnProps<T>['filterIcon'];
  titleClassName?: InternalColumnProps<T>['titleClassName'];
  onSort?: InternalColumnProps<T>['onSort'];
  currentSorter?: InternalColumnProps<T>['currentSorter'];
  column: InternalColumnProps<T>;
}) {
  // data
  const thProps = getThProps({ columnFixedStyle, headerCellStyle, align, key: _key, colSpan, rowSpan });
  const { cellChildrenCls, thCls, titleCls } = useThClassNames({
    ellipsis,
    className,
    prefixCls,
    titleClassName,
  });

  const { ComponentTh, ComponentHeaderCell } = useComponent(components);

  const cellChildren = (
    <div className={titleCls}>
      <div className={`${prefixCls}-sorter-wrapper`}>
        <span>{title}</span>
        <TheadSorter<T>
          sortType={sortType}
          sorter={sorter}
          column={column}
          onSort={onSort}
          currentSorter={currentSorter}
          prefixCls={prefixCls}
        />
      </div>
      <TheadFilter
        filterDropdown={filterDropdown}
        innerFiltersValue={innerFiltersValue}
        column={column}
        onHandleFilter={onHandleFilter}
        filterDropdownProps={filterDropdownProps}
        prefixCls={prefixCls}
        filterIcon={filterIcon}
      />
    </div>
  );

  const cellProps = (isString(ComponentHeaderCell) as unknown) ? { className: cellChildrenCls } : { className: cellChildrenCls, column };

  return (
    <ComponentTh className={thCls} {...thProps} {...headerCellProps}>
      <ComponentHeaderCell {...cellProps}>{cellChildren}</ComponentHeaderCell>
    </ComponentTh>
  );
}

export default Column;
