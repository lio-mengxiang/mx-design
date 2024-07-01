import { basic } from './basic';
import { icon } from './icon';
import { status } from './status';
import { disabled } from './disabled';
import { loading } from './loading';
import { group } from './group';
import { long } from './long';
import { compact } from './compact';

export const exampleList = {
  [basic.namespace]: basic,
  [icon.namespace]: icon,
  [status.namespace]: status,
  [disabled.namespace]: disabled,
  [loading.namespace]: loading,
  [group.namespace]: group,
  [long.namespace]: long,
  [compact.namespace]: compact,
};
