import type { DrawerProps } from '../interface';

export const findIndexById = (arr: DrawerProps[], id: DrawerProps['id']) => arr.findIndex((item) => item.id === id);
