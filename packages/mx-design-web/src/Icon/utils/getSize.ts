import type { IconProps } from '../interface';

export const getSize = (size: IconProps['size']) => {
  if (Array.isArray(size) && size.length === 2) {
    return size as string[];
  }
  const width = (size as string) || '1em';
  const height = (size as string) || '1em';
  return [width, height];
};
