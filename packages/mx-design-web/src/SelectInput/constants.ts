import type { SelectInputProps } from './interface';

export const DEFAULT_KEYS: SelectInputProps['keys'] = {
  label: 'label',
  value: 'value',
};

// single 和 multiple 共有特性
export const COMMON_PROPERTIES = [
  'status',
  'allowClear',
  'disabled',
  'addBefore',
  'addAfter',
  'prefix',
  'suffix',
  'placeholder',
  'readOnly',
  'onPaste',
  'onMouseenter',
  'onMouseleave',
];
