import React, { forwardRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Drawer } from './drawer';
import { useProviderStore } from '../store';
// type
import type { DrawerProps } from '../interface';

export interface IDrawerRef {
  add: (drawerProps: DrawerProps) => DrawerProps['id'];
  remove: (id: DrawerProps['id']) => void;
  clearAll: () => void;
  update: (id: DrawerProps['id'], options: DrawerProps) => void;
}

function DrawerProvider(_, ref) {
  // state
  const { add, remove, drawers, clearAll, update } = useProviderStore();

  if (!ref.current) {
    ref.current = {
      add,
      remove,
      clearAll,
      update,
    };
  }

  return (
    <AnimatePresence>
      {drawers.map((drawerProps) => (
        <Drawer {...drawerProps} key={drawerProps.id} />
      ))}
    </AnimatePresence>
  );
}

const DrawerComponent = forwardRef(DrawerProvider);

DrawerComponent.displayName = 'DrawerProvider';

export { DrawerComponent as DrawerProvider };
