import type { DrawerProps } from '../interface';

export const findById = (arr: DrawerProps[], id: DrawerProps['id']) => arr.find((item) => item.id === id);
