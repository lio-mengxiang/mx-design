import { basic } from './basic';
import { controlled } from './controlled';
import { group } from './group';
import { all } from './all';
import { customContent } from './customContent';

export const exampleList = {
  [basic.namespace]: basic,
  [controlled.namespace]: controlled,
  [group.namespace]: group,
  [all.namespace]: all,
  [customContent.namespace]: customContent,
};
