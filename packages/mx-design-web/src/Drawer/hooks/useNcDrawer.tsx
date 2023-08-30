import { useContext } from 'react';
import { ConfigContext } from '../../ConfigProvider';
import type { IDrawerRef } from '../components/drawerProvider';

export function useNcDrawer(): IDrawerRef {
  const { _drawerRef } = useContext(ConfigContext);

  return _drawerRef.current;
}
