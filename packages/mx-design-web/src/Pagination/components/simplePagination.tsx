import React, { forwardRef, useContext } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { SimplePageJumper } from './page-simple-jumper';
import { ConfigContext } from '../../ConfigProvider';
import { useDefaultPaginationStore } from '../store';
import { pickDataAttributes } from '../../utils';
import { StepPager } from './stepPager';
import { NEXT, PREV, defaultProps } from '../constants';
// type
import type { PaginationProps } from '../interface';

export const SimplePagination = forwardRef<HTMLDivElement | null, PaginationProps>((baseProps, ref) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<PaginationProps>(baseProps, defaultProps, componentConfig?.Pagination);
  const { hideOnSinglePage, className, style, showJumper, themeStyle } = props;
  const { prefixCls, allPages, current, pagerProps, disabled, onPageNumberChange, pageSize } = useDefaultPaginationStore(
    props,
    getPrefixCls
  );

  if (hideOnSinglePage && allPages <= 1) {
    return null;
  }

  const classNames = cs(
    prefixCls,
    `${prefixCls}-simple`,
    {
      [`${prefixCls}-disabled`]: disabled,
    },
    className
  );

  return (
    <div {...pickDataAttributes(props)} className={classNames} style={{ ...style, ...themeStyle }} ref={ref}>
      <ul className={`${prefixCls}-list`}>
        <StepPager {...pagerProps} key="previous" type={PREV} rootPrefixCls={prefixCls} allPages={allPages} />
        <li className={`${prefixCls}-item-simple-pager`}>
          <SimplePageJumper
            disabled={disabled}
            rootPrefixCls={prefixCls}
            totalPages={allPages}
            current={current}
            onPageChange={onPageNumberChange}
            simple={{ showJumper: typeof showJumper === 'boolean' ? showJumper : true }}
          />
        </li>
        <StepPager {...pagerProps} key="next" type={NEXT} rootPrefixCls={prefixCls} allPages={allPages} />
      </ul>
    </div>
  );
});
