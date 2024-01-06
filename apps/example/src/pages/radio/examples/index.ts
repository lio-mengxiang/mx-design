import { basic } from './basic';
import { controlled } from './controlled';
import { group } from './group';
import { button } from './button';
import { customContent } from './customContent';

export const exampleList = {
  [basic.namespace]: basic,
  [controlled.namespace]: controlled,
  [group.namespace]: group,
  [button.namespace]: button,
  [customContent.namespace]: customContent,
};
