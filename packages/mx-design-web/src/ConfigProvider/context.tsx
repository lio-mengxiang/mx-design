import React from 'react';
import { PREFIX_CLS, DEFAULT_LOCALE } from './constants';
import { renderEmpty } from './utils';
import { lightTheme } from '../Style/lightTheme';
// type
import type { INotificationRef } from '../Notification';
import type { IMessageRef } from '../Message';
import type { IModalRef } from '../Modal';
import type { IDrawerRef } from '../Drawer';
import type { ConfigProviderProps } from './interface';

const _notificationRef = React.createRef<INotificationRef>();
const _messageRef = React.createRef<IMessageRef>();
const _drawerRef = React.createRef<IDrawerRef>();
const _modalRef = React.createRef<IModalRef>();

export const defaultProps: ConfigProviderProps = {
  lang: DEFAULT_LOCALE,
  prefixCls: PREFIX_CLS,
  renderEmpty,
  globalCssVariables: lightTheme,
  getPrefixCls: (componentName: string, customPrefix?: string) => `${customPrefix || defaultProps.prefixCls}-${componentName}`,
  _notificationRef,
  _messageRef,
  _modalRef,
  _drawerRef,
};
