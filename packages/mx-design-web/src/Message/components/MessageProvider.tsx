import React, { forwardRef, useContext } from 'react';
import { useMergeProps } from '@mx-design/hooks';
import useStore from '../store';
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
  type: 'info',
};

function MessageProvider(baseProps: MessageManagerProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Message);
  const { position } = props;

  // state
  const { add, remove, state, clearAll, update } = useStore(position);

  const stateKeys = Object.keys(state) as Array<keyof typeof state>;

  const messageList = stateKeys.map((position, index) => (
    <MessageSingleDirection key={index} state={state} position={position} getPrefixCls={getPrefixCls} props={props} remove={remove} />
  ));

  /**
   * @zh 为了在首次渲染就得到对应的方法
   * @en To get all the methods on the first render
   */
  if (!ref.current)
    ref.current = {
      add,
      remove,
      clearAll,
      update,
    };

  return <Portal attach={document.body}>{messageList}</Portal>;
}

const MessageProviderComponent = forwardRef(MessageProvider);

MessageProviderComponent.displayName = 'MessageProvider';

export { MessageProviderComponent as MessageProvider };
