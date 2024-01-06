import React, { useState } from 'react';
import { cs, isFunction } from '@mx-design/web-utils';
import { Popup } from '../../../Popup';
import { isFilterActive, renderFilters } from '../../utils';
import { IconFilterFilling } from '../../../Icon';
import type { InternalColumnProps, TheadProps } from '../../interface';

export function TheadFilter<T>({
  filterDropdown,
  innerFiltersValue,
  column,
  onHandleFilter,
  filterDropdownProps,
  prefixCls,
  filterIcon,
}: {
  filterDropdown: InternalColumnProps<T>['filterDropdown'];
  innerFiltersValue: TheadProps<T>['innerFiltersValue'];
  column: InternalColumnProps<T>;
  onHandleFilter: InternalColumnProps<T>['onHandleFilter'];
  filterDropdownProps: InternalColumnProps<T>['filterDropdownProps'];
  prefixCls: string;
  filterIcon: InternalColumnProps<T>['filterIcon'];
}) {
  const shouldRenderFilters = isFunction(filterDropdown);
  const [visible, setVisible] = useState(false);
  const changePopupVisible = (newVisible: boolean) => {
    setVisible(newVisible);
  };

  const renderPop = () =>
    renderFilters({
      innerFiltersValue,
      filterDropdown,
      setVisible,
      column,
      onHandleFilter,
    });

  return (
    <>
      {shouldRenderFilters ? (
        <Popup
          content={renderPop}
          trigger="click"
          placement="bottom-start"
          {...filterDropdownProps}
          visible={visible}
          onVisibleChange={changePopupVisible}
          unmountOnExit
        >
          <div
            className={cs(`${prefixCls}-filters`, {
              [`${prefixCls}-filters-active`]: isFilterActive(innerFiltersValue[column.key]),
            })}
          >
            {filterIcon || <IconFilterFilling />}
          </div>
        </Popup>
      ) : null}
    </>
  );
}
