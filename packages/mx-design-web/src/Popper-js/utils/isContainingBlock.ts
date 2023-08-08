import { isSafari } from './isSafari';

export function isContainingBlock(element: Element): boolean {
  const safari = isSafari();
  const css = getComputedStyle(element);

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  return (
    css.transform !== 'none' ||
    css.perspective !== 'none' ||
    (css.containerType ? css.containerType !== 'normal' : false) ||
    (!safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false)) ||
    (!safari && (css.filter ? css.filter !== 'none' : false)) ||
    ['transform', 'perspective', 'filter'].some((value) => (css.willChange || '').includes(value)) ||
    ['paint', 'layout', 'strict', 'content'].some((value) => (css.contain || '').includes(value))
  );
}
