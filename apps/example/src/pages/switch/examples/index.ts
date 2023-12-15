import { basic } from './basic';
import { icon } from './icon';
import { text } from './text';
import { disabled } from './disabled';
import { loading } from './loading';
import { size } from './size';

export const exampleList = {
  [basic.namespace]: basic,
  [disabled.namespace]: disabled,
  [icon.namespace]: icon,
  [text.namespace]: text,
  [loading.namespace]: loading,
  [size.namespace]: size,
};
