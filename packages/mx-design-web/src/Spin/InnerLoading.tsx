import React from 'react';
import { SpinProps } from './interface';
import { LoadingIcon } from './loadingIcon';

interface IInnerLoading {
  prefixCls: string;
  size: SpinProps['size'];
  element: SpinProps['element'];
  tipCls: string;
  tip: SpinProps['tip'];
}

function InnerLoading({ prefixCls, size, element, tipCls, tip }: IInnerLoading) {
  return (
    <>
      <LoadingIcon size={size} prefixCls={prefixCls} element={element} />
      {tip ? <div className={tipCls}>{tip}</div> : null}
    </>
  );
}

export default InnerLoading;
