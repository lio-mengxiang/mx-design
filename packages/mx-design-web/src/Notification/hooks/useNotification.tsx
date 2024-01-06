import { useContext } from 'react';
import { ConfigContext } from '../../ConfigProvider';
// types
import type { INotificationRef } from '../components';

export function useNotification(): INotificationRef {
  const { _notificationRef } = useContext(ConfigContext);

  return _notificationRef.current;
}
