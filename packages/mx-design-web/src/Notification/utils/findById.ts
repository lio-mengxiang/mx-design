import type { NotificationProps } from '../interface';

export const findById = (arr: NotificationProps[], id: number) => arr.find((item) => item.id === id);
