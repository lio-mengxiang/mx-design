import React, { CSSProperties, ReactNode } from 'react';
import { getIcon } from '../utils/getIcon';
import { MORE } from '../constants';

type itemRenderType = (page: number, type: 'page' | 'more' | 'prev' | 'next', originElement: ReactNode) => ReactNode;

export interface JumpPagerProps {
  pageItemStyle?: CSSProperties;
  disabled?: boolean;
  rootPrefixCls: string;
  current: number;
  allPages: number;
  jumpPage: number;
  onClick: (value: number) => void;
  icons?: {
    prev?: ReactNode;
    next?: ReactNode;
    more?: ReactNode;
  };
  itemRender?: itemRenderType;
}

export function JumpPager(props: JumpPagerProps) {
  const { rootPrefixCls, current, allPages, jumpPage, icons, disabled, pageItemStyle, itemRender } = props;

  const onClick = () => {
    // newPage don't cross the boundary
    !disabled && props.onClick?.(Math.min(allPages, Math.max(1, current + jumpPage)));
  };

  const originElement = getIcon(MORE, icons);

  return (
    <li style={pageItemStyle} className={`${rootPrefixCls}-item ${rootPrefixCls}-item-jumper`} onClick={onClick}>
      {itemRender ? itemRender(undefined, MORE, originElement) : originElement}
    </li>
  );
}
