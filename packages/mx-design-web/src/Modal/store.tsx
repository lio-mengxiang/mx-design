import { useState } from 'react';
import { getId, findById, findIndexById } from './utils';
// types
import type { ModalProps } from './interface';

// state
const initialState = [];

function useStore() {
  const [modals, setModals] = useState<ModalProps[]>(initialState);

  return {
    modals,
    add: (modalProps: ModalProps) => {
      const id = getId(modalProps);
      setModals((preState) => {
        if (modalProps?.id) {
          const modal = findById(modals, modalProps.id);
          if (modal) return preState;
        }
        return [{ ...modalProps, id }, ...preState];
      });
      return modalProps?.id ? modalProps?.id : id;
    },
    remove: (id: ModalProps['id']) => {
      setModals((preState) => {
        const index = findIndexById(preState, id);
        if (index === -1) return preState;
        return preState.filter((modal) => modal.id !== id);
      });
    },

    update: (modalProps: ModalProps) => {
      if (!modalProps?.id) return;

      setModals((preState) => {
        const nextState = [...preState];
        const index = findIndexById(preState, modalProps.id);

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
      setModals({ ...initialState });
    },
  };
}

export default useStore;
