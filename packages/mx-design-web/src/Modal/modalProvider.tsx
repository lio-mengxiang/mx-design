import React, { forwardRef, useImperativeHandle } from 'react';
import { Modal } from './modal.nc';
import useStore from './store';
import { AnimatePresence } from 'framer-motion';
// type
import type { ModalProps } from './interface';

export interface IModalRef {
  add: (modalProps: ModalProps) => ModalProps['id'];
  remove: (id: ModalProps['id']) => void;
  clearAll: () => void;
  update: (id: ModalProps['id'], options: ModalProps) => void;
}

function ModalProvider(_, ref) {
  // state
  const { add, remove, modals, clearAll, update } = useStore();

  if (!ref.current)
    ref.current = {
      add,
      remove,
      clearAll,
      update,
    };
  console.log('modals: ', modals);

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

export default ModalProviderComponent;
