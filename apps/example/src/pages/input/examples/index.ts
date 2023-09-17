import { basic } from './basic';
import { status } from './status';
import { label } from './label';
import { suffix } from './suffix';
import { search } from './search';
import { limit } from './limit';

export const exampleList = {
  [basic.namespace]: basic,
  [status.namespace]: status,
  [label.namespace]: label,
  [suffix.namespace]: suffix,
  [search.namespace]: search,
  [limit.namespace]: limit,
};
