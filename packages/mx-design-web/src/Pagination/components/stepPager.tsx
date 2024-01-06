import React, { CSSProperties, ReactNode } from 'react';
import { cs } from '@mx-design/web-utils';
import { getIcon } from '../utils';
import { NEXT, PREV } from '../constants';
// type
import { itemRenderType } from '../interface';

interface StepPagerProps {
  pageItemStyle?: CSSProperties;
  disabled?: boolean;
  rootPrefixCls: string;
  type: 'prev' | 'next';
  current: number;
  allPages: number;
  onClick: (value: number) => void;
  icons?: {
    prev?: ReactNode;
    next?: ReactNode;
    more?: ReactNode;
  };
  itemRender?: itemRenderType;
}

export function StepPager(props: StepPagerProps) {
  const { rootPrefixCls, current, allPages, type, icons, disabled, pageItemStyle, itemRender } = props;
  const prefixCls = `${rootPrefixCls}-item`;
  const StepIcon = type === PREV ? getIcon(PREV, icons) : getIcon(NEXT, icons);
  let _disabled = false;
  if (allPages === 0) {
    _disabled = true;
  } else if (type === PREV) {
    _disabled = current <= 1; // current ===0 || current===1
  } else {
    _disabled = current === allPages;
  }
  const innerDisabled = disabled || _disabled;
  let nextPage = current + (type === PREV ? -1 : 1);
  nextPage = Math.max(0, Math.min(allPages, nextPage));

  const cls = cs(prefixCls, `${prefixCls}-${type}`, {
    [`${prefixCls}-disabled`]: innerDisabled,
  });

  const onClick = () => {
    if (innerDisabled) {
      return;
    }
    props.onClick?.(nextPage);
  };

  return (
    <li style={pageItemStyle} className={cls} onClick={onClick} tabIndex={innerDisabled ? -1 : 0}>
      {itemRender ? itemRender(undefined, type, StepIcon) : StepIcon}
    </li>
  );
}
