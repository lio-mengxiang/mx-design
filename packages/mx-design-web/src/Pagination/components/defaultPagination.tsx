import React, { forwardRef, useContext } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { cs } from '@mx-design/web-utils';
import { DefaultPageJumper } from './page-default-jumper';
import { TotalElement } from './totalElement';
import { ConfigContext } from '../../ConfigProvider';
import { Pager } from './pager';
import { useDefaultPaginationStore } from '../store';
import { pickDataAttributes } from '../../utils';
import { defaultProps } from '../constants';
import { useStyles } from '../../hooks';
// type
import type { PaginationProps } from '../interface';

export const DefaultPagination = forwardRef<HTMLDivElement | null, PaginationProps>((baseProps, ref) => {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps<PaginationProps>(baseProps, defaultProps, componentConfig?.Pagination);
  const { hideOnSinglePage, className, style, showJumper, showTotal, total, themeStyle } = props;
  const { prefixCls, allPages, current, pagerProps, bufferSize, disabled, onPageNumberChange, pageSize } = useDefaultPaginationStore(
    props,
    getPrefixCls
  );

  // style
  const { wrapperStyle } = useStyles<PaginationProps>({ style, themeStyle });

  if (hideOnSinglePage && allPages <= 1) {
    return null;
  }

  const classNames = cs(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
    },
    className
  );

  return (
    <div {...pickDataAttributes(props)} className={classNames} style={wrapperStyle} ref={ref}>
      <TotalElement showTotal={showTotal} prefixCls={prefixCls} total={total} current={current} pageSize={pageSize} />
      <Pager bufferSize={bufferSize} allPages={allPages} current={current} prefixCls={prefixCls} pagerProps={pagerProps} />
      {showJumper && (
        <DefaultPageJumper
          disabled={disabled}
          rootPrefixCls={prefixCls}
          totalPages={allPages}
          current={current}
          onPageChange={onPageNumberChange}
        />
      )}
    </div>
  );
});
