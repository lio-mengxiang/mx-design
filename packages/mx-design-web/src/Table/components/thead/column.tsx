import React, { useState } from 'react';
import { cs, isArray, isString } from '@mx-design/web-utils';
import { useComponent, useThClassNames } from '../../hooks';
import { getThProps } from '../../utils';
// type
// import { ColumnComponentProps } from '../interface';

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
  sorter,
  sortDirections = ['ascend', 'descend'],
  _key,
}: any) {
  // data
  const [isEnter, setEnter] = useState<boolean>(false);
  const enableSort = sorter && isArray(sortDirections) && sortDirections.length;
  const nextSortDirection = enableSort ? getNextSortDirection() : undefined;

  function getNextSortDirection() {}

  const thProps = getThProps({ columnFixedStyle, headerCellStyle, align, key: _key, colSpan, rowSpan });
  const titleProps = ellipsis && typeof title === 'string' ? { title } : {};
  const { cellChildrenCls, thCls, titleCls } = useThClassNames({ ellipsis, isEnter, className, prefixCls, nextSortDirection, enableSort });

  const { ComponentTh, ComponentHeaderCell } = useComponent(components);

  const cellChildren = (
    <>
      <span className={titleCls} {...titleProps}>
        {title}
      </span>
    </>
  );

  const cellProps = (isString(ComponentHeaderCell) as unknown) ? { className: cellChildrenCls } : { className: cellChildrenCls, column };

  return (
    <ComponentTh className={thCls} {...thProps} {...headerCellProps}>
      <ComponentHeaderCell {...cellProps}>{cellChildren}</ComponentHeaderCell>
    </ComponentTh>
  );
}

export default Column;
