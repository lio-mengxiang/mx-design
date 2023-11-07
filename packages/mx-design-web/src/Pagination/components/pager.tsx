import React from 'react';
import { JumpPager } from './jumper';
import { PagerItem } from './page-item';
import { NEXT, PREV } from '../constants';
import { StepPager } from './stepPager';

export function Pager(props) {
  const { bufferSize, allPages, current, prefixCls, pagerProps } = props;
  let leftBuffer;
  let rightBuffer;
  const pagers = [];
  // if pages is more than maxPage, then render 1 - maxPage
  if (bufferSize * 2 + 1 + 2 >= allPages) {
    leftBuffer = 1;
    rightBuffer = allPages;
    //  allPages - current <= max represent that right page never be folded
  } else if (allPages - current <= bufferSize) {
    rightBuffer = allPages;
    leftBuffer = allPages - 2 * bufferSize - 1;
    leftBuffer = leftBuffer <= 1 ? 1 : leftBuffer;
    //  current - max <= 1 represent that left page never be folded
  } else if (current - bufferSize <= 1) {
    leftBuffer = 1;
    rightBuffer = 2 * bufferSize + leftBuffer + 1;
    rightBuffer = rightBuffer >= allPages ? allPages : rightBuffer;
  } else {
    leftBuffer = current - bufferSize;
    rightBuffer = current + bufferSize;
  }
  if (leftBuffer !== 1) {
    pagers.push(<PagerItem rootPrefixCls={prefixCls} key={1} pageNum={1} {...pagerProps} />);
  }
  if (leftBuffer > 2) {
    pagers.push(<JumpPager rootPrefixCls={prefixCls} allPages={allPages} {...pagerProps} key="break-l" jumpPage={-(bufferSize * 2 + 1)} />);
  }
  for (let index = leftBuffer; index <= rightBuffer; index++) {
    pagers.push(<PagerItem rootPrefixCls={prefixCls} key={index} pageNum={index} {...pagerProps} />);
  }
  if (rightBuffer < allPages - 1) {
    pagers.push(<JumpPager rootPrefixCls={prefixCls} allPages={allPages} {...pagerProps} key="break-r" jumpPage={bufferSize * 2 + 1} />);
  }

  if (rightBuffer !== allPages) {
    pagers.push(<PagerItem rootPrefixCls={prefixCls} key={allPages} pageNum={allPages} {...pagerProps} />);
  }
  return (
    <ul className={`${prefixCls}-list`}>
      <StepPager {...pagerProps} key="previous" type={PREV} rootPrefixCls={prefixCls} allPages={allPages} />
      {pagers}
      <StepPager {...pagerProps} key="next" type={NEXT} rootPrefixCls={prefixCls} allPages={allPages} />
    </ul>
  );
}
