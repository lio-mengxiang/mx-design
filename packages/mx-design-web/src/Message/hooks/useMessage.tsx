import { useContext } from 'react';
import { ConfigContext } from '../../ConfigProvider';
// type
import type { IMessageRef } from '../interface';

export function useMessage(): IMessageRef {
  const { _messageRef } = useContext(ConfigContext);

  return _messageRef.current;
}
