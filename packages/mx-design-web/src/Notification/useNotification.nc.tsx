import { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import type { INotificationRef } from './NotificationProvider';

export function useNotification(): INotificationRef {
  const { _notificationRef } = useContext(ConfigContext);

  return _notificationRef.current;
}

export default useNotification;
