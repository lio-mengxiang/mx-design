import { MutableRefObject } from 'react';
import { isWindow } from '@mx-design/web-utils';
import { findNode } from './findNode';
import { getOffsetTop } from './getOffsetTop';
import { getScrollLeft } from './getScrollLeft';
import { getScrollTop } from './getScrollTop';
// type
import type { AnchorProps } from '../interface';

interface IScrollIntoView {
  scrollContainer: MutableRefObject<HTMLElement | Window>;
  hash?: string;
  offset: AnchorProps['offset'];
  isScrolling: MutableRefObject<boolean>;
}

export function scrollIntoView({ scrollContainer, hash, offset, isScrolling }: IScrollIntoView) {
  if (!hash) return;
  const element = findNode(document, hash);
  if (!element) return;

  const container = scrollContainer.current;

  const scrollTop = getScrollTop(container);
  const offsetTop = getOffsetTop(element, container);

  const targetScrollTop = scrollTop + offsetTop + offset;
  isScrolling.current = true;

  if (isWindow(container)) {
    (container as Window).scrollTo(getScrollLeft(container), targetScrollTop);
  } else {
    (container as HTMLElement).scrollTop = targetScrollTop;
  }
}
