import { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import type { IToastRef } from './messageProvider';

export function useMessage(): IToastRef {
  const { _toastRef } = useContext(ConfigContext);

  return _toastRef.current;
}

export default useMessage;
