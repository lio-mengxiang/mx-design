import { isUndefined } from '@mx-design/web-utils';
import { AnchorLinkProps } from '../interface';

export const isNotNullUndefined = (title: AnchorLinkProps['title']) => {
  return !isUndefined(title) && title !== null && title !== '';
};
