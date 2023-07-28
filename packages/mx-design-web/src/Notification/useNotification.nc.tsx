import { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import type { IRef } from './notification';

export function useNotification(): IRef {
  const { _notificationRef } = useContext(ConfigContext);

  return _notificationRef.current;
}

export default useNotification;
