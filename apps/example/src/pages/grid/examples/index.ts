import { basic } from './basic';
import { offsetOfCol } from './offsetOfCol';
import { pushPull } from './pushPull';
import { intervalOfGrid } from './intervalOfGrid';
import { horizontalLayout } from './horizontalLayout';
import { verticalLayout } from './verticalLayout';
import { responsiveLayout } from './responsiveLayout';
import { order } from './order';
import { advancedResponsiveLayout } from './advancedResponsiveLayout';
import { flex } from './flex';

export const exampleList = {
  [basic.namespace]: basic,
  [offsetOfCol.namespace]: offsetOfCol,
  [pushPull.namespace]: pushPull,
  [intervalOfGrid.namespace]: intervalOfGrid,
  [horizontalLayout.namespace]: horizontalLayout,
  [verticalLayout.namespace]: verticalLayout,
  [responsiveLayout.namespace]: responsiveLayout,
  [order.namespace]: order,
  [advancedResponsiveLayout.namespace]: advancedResponsiveLayout,
  [flex.namespace]: flex,
};
