import React, { forwardRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Modal } from './modal';
import useStore from '../store';
// type
import type { ModalProps } from '../interface';

export interface IModalRef {
  add: (modalProps: ModalProps) => ModalProps['id'];
  remove: (id: ModalProps['id']) => void;
  clearAll: () => void;
  update: (id: ModalProps['id'], options: ModalProps) => void;
}

function ModalProvider(_, ref) {
  // state
  const { add, remove, modals, clearAll, update } = useStore();

  if (!ref.current) {
    ref.current = {
      add,
      remove,
      clearAll,
      update,
    };
  }

  return (
    <div>
      <AnimatePresence>
        {modals.map((modalProps) => (
          <Modal {...modalProps} key={modalProps.id} />
        ))}
      </AnimatePresence>
    </div>
  );
}

const ModalProviderComponent = forwardRef(ModalProvider);

ModalProviderComponent.displayName = 'ModalProvider';

export { ModalProviderComponent as ModalProvider };
