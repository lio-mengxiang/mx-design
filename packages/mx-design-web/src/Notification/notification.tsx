import React, { forwardRef, useContext, useImperativeHandle } from 'react';
import { AnimatePresence } from 'framer-motion';
import useStore from './store';
import { ConfigContext } from '../ConfigProvider';
import { useClassNames } from './hooks';
import { TOP_RIGHT } from './constants';
import { Portal } from '../Portal';
import { useMergeProps } from '@mx-design/hooks';
import NotificationWrapper from './notificationWrapper';
// types
import { IPosition, NotificationManagerProps, NotificationProps } from './interface';

export interface IRef {
  add: (noticeProps: NotificationProps) => number;
  remove: (id: number) => void;
  clearAll: () => void;
  update: (id: number, options: NotificationProps) => void;
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
  const { add, remove, state, clearAll, update } = useStore(position);

  const stateKeys = Object.keys(state) as Array<keyof typeof state>;
  const notificationList = stateKeys.map((position) => {
    const notifications = state[position];
    // classnames
    const { wrapperClassNames } = useClassNames({ getPrefixCls, position });

    return (
      <div role="region" aria-live="polite" key={position} className={wrapperClassNames}>
        <AnimatePresence initial={false}>
          {notifications.map((notice) => (
            <NotificationWrapper key={notice.id} position={position} {...props} {...notice} remove={remove} />
          ))}
        </AnimatePresence>
      </div>
    );
  });

  useImperativeHandle<any, IRef>(ref, () => ({
    add,
    remove,
    clearAll,
    update,
  }));

  return <Portal attach={document.body}>{notificationList}</Portal>;
}

const NotificationWrapperComponent = forwardRef(NotificationProvider);

NotificationWrapperComponent.displayName = 'NotificationProvider';

export default NotificationWrapperComponent;
