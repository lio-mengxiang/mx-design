import React, { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
// type
import type { LoadingProps } from './interface';

function Loading(props: LoadingProps) {
  // props
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('loading');

  const { size = '20px', borderWidth = '4px', style } = props;
  const itemStyle = { width: size, height: size, borderWidth };
  return (
    <span className={`${prefixCls}-container`} style={style}>
      <span className={`${prefixCls}-container-1`} style={itemStyle} />
      <span className={`${prefixCls}-container-2`} style={itemStyle} />
    </span>
  );
}
export default Loading;
