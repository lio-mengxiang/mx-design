import React, { forwardRef, useContext, useSyncExternalStore } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useMergeProps } from '@mx-design/hooks';
import { store } from '../store';
import { ConfigContext } from '../../ConfigProvider';
import { useClassNames } from '../hooks';
import { TOP_RIGHT } from '../constants';
import { Portal } from '../../Portal';
import { NotificationWrapper } from './notificationWrapper';
// types
import { IPosition, NotificationManagerProps, NotificationProps } from '../interface';

export interface INotificationRef {
  add: (noticeProps: NotificationProps) => number;
  remove: (id: number) => void;
  clearAll: () => void;
  update: (id: number, options: NotificationProps) => void;
}

function NotificationItem({ state, position, getPrefixCls, props, remove }) {
  const notifications = state[position];
  // classnames
  const { wrapperClassNames } = useClassNames({ getPrefixCls, position });

  return (
    <div role="region" aria-live="polite" key={position} className={wrapperClassNames}>
      <AnimatePresence mode="popLayout">
        {notifications.map((notice) => (
          <NotificationWrapper key={notice.id} position={position} {...props} {...notice} remove={remove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

const defaultProps = {
  position: TOP_RIGHT as IPosition,
  duration: 3000,
  showIcon: true,
};

function NotificationProvider(baseProps: NotificationManagerProps, ref) {
  // props
  const { getPrefixCls, componentConfig } = useContext(ConfigContext);
  const props = useMergeProps(baseProps, defaultProps, componentConfig?.Notification);
  const { position } = props;

  // state
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);

  const stateKeys = Object.keys(state) as Array<keyof typeof state>;
  const notificationList = stateKeys.map((position, index) => (
    <NotificationItem key={index} state={state} position={position} getPrefixCls={getPrefixCls} props={props} remove={store.remove} />
  ));

  return <Portal attach={document.body}>{notificationList}</Portal>;
}

const NotificationWrapperComponent = forwardRef(NotificationProvider);

NotificationWrapperComponent.displayName = 'NotificationProvider';

export { NotificationWrapperComponent as NotificationProvider };
