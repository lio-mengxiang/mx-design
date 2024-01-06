import { isObject } from '@mx-design/web-utils';
import { DEFAULT_KEYS } from '../constants';
import type { SelectInputProps } from '../interface';

export function getInputValue(value: SelectInputProps['value'], keys: SelectInputProps['keys'] = DEFAULT_KEYS) {
  return isObject(value) ? value[keys.label] : value;
}
