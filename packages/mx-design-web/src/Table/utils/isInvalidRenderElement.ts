import React from 'react';
import { isObject } from '@mx-design/web-utils';

export function isInvalidRenderElement(element) {
  return element && !React.isValidElement(element) && isObject(element);
}
