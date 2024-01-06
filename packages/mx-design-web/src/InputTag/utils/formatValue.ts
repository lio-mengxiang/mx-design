import { isArray, isObject } from '@mx-design/web-utils';
import type { ObjectValueType } from '../interface';

export function formatValue(value: (ObjectValueType | string)[]) {
  if (!isArray(value)) {
    return [];
  }
  return value.map((item) => {
    return isObject(item)
      ? {
          ...item,
          label: 'label' in item ? item.label : item.value,
          value: item.value,
          closable: item.closable,
        }
      : {
          label: item,
          value: item,
        };
  });
}
