import { getId, findById, findIndexById } from '../utils';
// types
import type { DrawerProps } from '../interface';

// state
const initialState: DrawerProps[] = [];

const copyInitialState = [...initialState];

export const store = createStore(initialState);

export const DrawerStore = {
  add: store.add,
  update: store.update,
  remove: store.remove,
  clearAll: store.clearAll,
};

function createStore(initialState: DrawerProps[]) {
  let state = initialState;
  const listeners = new Set<() => void>();

  const setState = (setStateFn: (values: DrawerProps[]) => DrawerProps[]) => {
    state = setStateFn(state);
    listeners.forEach((l) => l());
  };

  return {
    getState: () => state,

    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => copyInitialState);
        listeners.delete(listener);
      };
    },

    add: (drawerProps: DrawerProps) => {
      const id = getId(drawerProps);
      setState((preState) => {
        if (drawerProps?.id) {
          const modal = findById(preState, drawerProps.id);
          if (modal) return preState;
        }
        return [{ ...drawerProps, id }, ...preState];
      });
      return drawerProps?.id ? drawerProps?.id : id;
    },
    remove: (id: DrawerProps['id']) => {
      setState((preState) => {
        const index = findIndexById(preState, id);
        if (index === -1) return preState;
        return preState.filter((modal) => modal.id !== id);
      });
    },

    update: (id: DrawerProps['id'], drawerProps: DrawerProps) => {
      if (!id) return;

      setState((preState) => {
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
      setState(() => ({ ...copyInitialState }));
    },
  };
}
