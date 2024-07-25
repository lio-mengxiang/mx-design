import React, { forwardRef, useSyncExternalStore } from 'react';
import { AnimatePresence } from 'framer-motion';
import { store } from '../store';
import Drawer from './drawer';

function DrawerProvider(_, ref) {
  // state
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);

  return (
    <AnimatePresence>
      {state.map((drawerProps) => (
        <Drawer {...drawerProps} key={drawerProps.id} />
      ))}
    </AnimatePresence>
  );
}

const DrawerComponent = forwardRef(DrawerProvider);

export { DrawerComponent as DrawerProvider };
