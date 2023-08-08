import type { ModalProps } from '../interface';

export const findById = (arr: ModalProps[], id: ModalProps['id']) => arr.find((item) => item.id === id);
