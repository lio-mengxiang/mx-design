import type { MessageProps } from '../interface';

export const findById = (arr: MessageProps[], id: number) => arr.find((item) => item.id === id);
