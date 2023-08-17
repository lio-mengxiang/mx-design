import { useContext } from 'react';
import { ConfigContext } from '../../ConfigProvider';
import type { IModalRef } from '../components/modalProvider';

export function useNcModal(): IModalRef {
  const { _modalRef } = useContext(ConfigContext);

  return _modalRef.current;
}
