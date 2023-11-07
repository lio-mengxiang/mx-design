import { cs } from '@mx-design/web-utils';
import React, { ReactNode, CSSProperties } from 'react';
import { getPagerStyle } from '../utils';

type itemRenderType = (page: number, type: 'page' | 'more' | 'prev' | 'next', originElement: ReactNode) => ReactNode;

export interface PagerProps {
  pageItemStyle?: CSSProperties;
  activePageItemStyle?: CSSProperties;
  disabled?: boolean;
  rootPrefixCls: string;
  pageNum: number;
  current: number;
  onClick: (value: number) => void;
  itemRender?: itemRenderType;
}

export function PagerItem(props: PagerProps) {
  const { pageNum, current, rootPrefixCls, pageItemStyle, activePageItemStyle, itemRender } = props;

  // data
  const prefixCls = `${rootPrefixCls}-item`;
  const isActive = current === pageNum;
  const style = getPagerStyle(pageItemStyle, isActive, activePageItemStyle);

  // event
  const onClick = (e) => {
    const { pageNum, onClick, disabled } = props;
    e.stopPropagation();
    if (!disabled) onClick?.(pageNum);
  };

  return (
    <li
      style={style}
      className={cs(prefixCls, {
        [`${prefixCls}-active`]: isActive,
      })}
      onClick={onClick}
      tabIndex={-1}
    >
      {itemRender ? itemRender(pageNum, 'page', pageNum) : pageNum}
    </li>
  );
}
