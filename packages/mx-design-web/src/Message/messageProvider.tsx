import React, { forwardRef, useContext, useImperativeHandle } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMergeProps } from '@mx-design/hooks';
import useStore from './store';
import { ConfigContext } from '../ConfigProvider';
import { useClassNames } from './hooks';
import { TOP } from './constants';
import { Portal } from '../Portal';
import MessageWrapper from './messageWrapper';
// types
import type { MessageManagerProps, MessageProps } from './interface';
import type { IPosition } from '../Notification';

function MessageItem({ state, position, getPrefixCls, props, remove }) {
  const messages = state[position];
  // classnames
  const { wrapperClassNames } = useClassNames({ getPrefixCls, position });

  return (
    <div role="region" aria-live="polite" key={position} className={wrapperClassNames}>
      <AnimatePresence initial={false}>
        {messages.map((notice) => (
          <MessageWrapper key={notice.id} position={position} {...props} {...notice} remove={remove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export interface IToastRef {
  add: (noticeProps: MessageProps) => number;
  remove: (id: number) => void;
  clearAll: () => void;
  update: (id: number, options: MessageProps) => void;
}

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
    <MessageItem key={index} state={state} position={position} getPrefixCls={getPrefixCls} props={props} remove={remove} />
  ));

  useImperativeHandle<any, IToastRef>(ref, () => ({
    add,
    remove,
    clearAll,
    update,
  }));

  return <Portal attach={document.body}>{messageList}</Portal>;
}

const MessageProviderComponent = forwardRef(MessageProvider);

MessageProviderComponent.displayName = 'MessageProvider';

export default MessageProviderComponent;
