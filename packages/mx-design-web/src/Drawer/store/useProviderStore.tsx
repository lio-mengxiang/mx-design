import { useState } from 'react';
import { getId, findById, findIndexById } from '../utils';
// types
import type { DrawerProps } from '../interface';

// state
const initialState = [];

export function useProviderStore() {
  const [drawers, setDrawers] = useState<DrawerProps[]>(initialState);

  return {
    drawers,
    add: (drawerProps: DrawerProps) => {
      const id = getId(drawerProps);
      setDrawers((preState) => {
        if (drawerProps?.id) {
          const modal = findById(drawers, drawerProps.id);
          if (modal) return preState;
        }
        return [{ ...drawerProps, id }, ...preState];
      });
      return drawerProps?.id ? drawerProps?.id : id;
    },
    remove: (id: DrawerProps['id']) => {
      setDrawers((preState) => {
        const index = findIndexById(preState, id);
        if (index === -1) return preState;
        return preState.filter((modal) => modal.id !== id);
      });
    },

    update: (id: DrawerProps['id'], drawerProps: DrawerProps) => {
      if (!id) return;

      setDrawers((preState) => {
        const nextState = [...preState];
        const index = findIndexById(preState, id);

        if (index !== -1) {
          nextState[index] = {
            ...nextState[index],
            ...drawerProps,
          };
        }

        return nextState;
      });
    },

    clearAll: () => {
      setDrawers({ ...initialState });
    },
  };
}
