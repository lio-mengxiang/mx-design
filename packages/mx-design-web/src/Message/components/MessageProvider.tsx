import React, { forwardRef, useContext, useSyncExternalStore } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import { store } from '../store';
import { ConfigContext } from '../../ConfigProvider';
import { TOP } from '../constants';
import { Portal } from '../../Portal';
import { MessageSingleDirection } from './MessageSingleDirection';
// types
import type { MessageManagerProps } from '../interface';
import type { IPosition } from '../../Notification';

const defaultProps = {
  position: TOP as IPosition,
  duration: 3000,
  showIcon: true,
  closable: true,
  type: 'info',
};

function MessageProvider(baseProps: MessageManagerProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Message);

  // state
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);

  const stateKeys = Object.keys(state) as Array<keyof typeof state>;

  const messageList = stateKeys.map((position, index) => (
    <MessageSingleDirection key={index} state={state} position={position} getPrefixCls={getPrefixCls} props={props} remove={store.remove} />
  ));

  return <Portal attach={document.body}>{messageList}</Portal>;
}

const MessageProviderComponent = forwardRef(MessageProvider);

export { MessageProviderComponent as MessageProvider };
