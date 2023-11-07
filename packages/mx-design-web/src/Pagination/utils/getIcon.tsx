import React from 'react';
import { IconArrowLeft, IconArrowRight, IconEllipsis } from '../../Icon';
import { MORE, NEXT, PREV } from '../constants';

export function getIcon(name: string, icons) {
  switch (name) {
    case PREV:
      return icons && icons.prev ? icons.prev : <IconArrowLeft />;
    case NEXT:
      return icons && icons.next ? icons.next : <IconArrowRight />;
    case MORE:
      return icons && icons.more ? icons.more : <IconEllipsis />;
    default:
      return null;
  }
}
