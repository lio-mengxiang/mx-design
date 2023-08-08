import type { ModalProps } from '../interface';

export const findIndexById = (arr: ModalProps[], id: ModalProps['id']) => arr.findIndex((item) => item.id === id);
