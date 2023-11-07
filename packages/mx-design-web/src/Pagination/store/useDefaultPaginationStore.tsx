import { useEffect } from 'react';
import { useMergeValue } from '@mx-design/hooks';
import { DEFAULT_CURRENT } from '../constants';
import { getAdjustPageSize, getAdjustedCurrent, getAllPages, getBufferSize } from '../utils';

export function useDefaultPaginationStore(props, getPrefixCls) {
  const {
    total: propTotal,
    pageSize: propPageSize,
    current: propCurrent,
    sizeOptions: propSizeOptions,
    defaultCurrent,
    defaultPageSize,
    pageItemStyle,
    activePageItemStyle,
    disabled,
    itemRender,
    onChange,
  } = props;
  const prefixCls = getPrefixCls('pagination');

  const [current, setCurrent] = useMergeValue(DEFAULT_CURRENT, {
    defaultValue: defaultCurrent,
    value: propCurrent,
  });

  const [pageSize, setPageSize] = useMergeValue(getAdjustPageSize(propSizeOptions), {
    defaultValue: defaultPageSize,
    value: propPageSize,
  });

  const total = propTotal;
  const allPages = getAllPages(pageSize, total);
  const bufferSize = getBufferSize(props.bufferSize, allPages);

  // propSizeOptions change may change pageSize
  useEffect(() => {
    const needAdjust = propSizeOptions && !propSizeOptions.includes(pageSize);
    if (needAdjust && !('pageSize' in props)) {
      setPageSize(getAdjustPageSize(propSizeOptions));
    }
  }, [propSizeOptions]);

  // if total and pageSize changes, current page will change
  // if current transcend boundary, it will be corrected
  useEffect(() => {
    const newCurrent = getAdjustedCurrent(pageSize, total, current);
    if (newCurrent !== current && !('current' in props)) {
      setCurrent(newCurrent);
    }
  }, [total, current, pageSize]);

  const onPageNumberChange = (pageNumber) => {
    if (!('current' in props)) {
      setCurrent(pageNumber);
    }
    onChange?.(pageNumber, pageSize);
  };

  const pagerProps = {
    pageItemStyle,
    activePageItemStyle,
    disabled,
    prefixCls,
    current,
    onClick: onPageNumberChange,
    itemRender,
  };

  return { prefixCls, allPages, current, pagerProps, setCurrent, disabled, bufferSize, onPageNumberChange, pageSize };
}
