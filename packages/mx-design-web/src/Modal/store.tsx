import { getId, findById, findIndexById } from './utils';
// types
import type { ModalProps } from './interface';

// state
const initialState: ModalProps[] = [];

const copyInitialState = [...initialState];

export const store = createStore(initialState);

export const ModalStore = {
  add: store.add,
  update: store.update,
  remove: store.remove,
  clearAll: store.clearAll,
};

function createStore(initialState: ModalProps[]) {
  let state = initialState;
  const listeners = new Set<() => void>();

  const setState = (setStateFn: (values: ModalProps[]) => ModalProps[]) => {
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

    add: (modalProps: ModalProps) => {
      const id = getId(modalProps);
      setState((preState) => {
        if (modalProps?.id) {
          const modal = findById(preState, modalProps.id);
          if (modal) return preState;
        }
        return [{ ...modalProps, id }, ...preState];
      });
      return modalProps?.id ? modalProps?.id : id;
    },
    remove: (id: ModalProps['id']) => {
      setState((preState) => {
        const index = findIndexById(preState, id);
        if (index === -1) return preState;
        return preState.filter((modal) => modal.id !== id);
      });
    },

    update: (id: ModalProps['id'], modalProps: ModalProps) => {
      if (!id) return;

      setState((preState) => {
        const nextState = [...preState];
        const index = findIndexById(preState, id);

        if (index !== -1) {
          nextState[index] = {
            ...nextState[index],
            ...modalProps,
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
