import { basic } from './basic';
import { differentTrigger } from './differentTrigger';
import { position } from './position';
import { disabled } from './disabled';
import { getDisabledStatus } from './getDisabledStatus';
import { itemStyle } from './itemStyle';

export const exampleList = {
  [basic.namespace]: basic,
  [position.namespace]: position,
  [disabled.namespace]: disabled,
  [differentTrigger.namespace]: differentTrigger,
  [getDisabledStatus.namespace]: getDisabledStatus,
  [itemStyle.namespace]: itemStyle,
};
