import { useContext } from 'react';
import { ConfigContext } from '../ConfigProvider';
import type { IModalRef } from './modalProvider';

function useModal(): IModalRef {
  const { _modalRef } = useContext(ConfigContext);

  return _modalRef.current;
}

export default useModal;
