import React, { forwardRef, useSyncExternalStore } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './modal';
import { store } from '../store';
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
  const state = useSyncExternalStore(store.subscribe, store.getState, store.getState);

  return (
    <AnimatePresence>
      {state.map((modalProps) => (
        <Modal {...modalProps} key={modalProps.id} />
      ))}
    </AnimatePresence>
  );
}

const ModalProviderComponent = forwardRef(ModalProvider);

export { ModalProviderComponent as ModalProvider };
