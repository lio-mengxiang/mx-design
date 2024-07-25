import React from 'react';
import { PREFIX_CLS, DEFAULT_LOCALE } from './constants';
import { renderEmpty } from './utils';
import { lightTheme } from '../Style/lightTheme';
// type
import type { IModalRef } from '../Modal';
import type { ConfigProviderProps } from './interface';

const _modalRef = React.createRef<IModalRef>();

export const defaultProps: ConfigProviderProps = {
  lang: DEFAULT_LOCALE,
  prefixCls: PREFIX_CLS,
  renderEmpty,
  globalCssVariables: lightTheme,
  getPrefixCls: (componentName: string, customPrefix?: string) => `${customPrefix || defaultProps.prefixCls}-${componentName}`,
  _modalRef,
};
