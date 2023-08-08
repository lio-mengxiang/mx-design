import type { Boundary, RootBoundary, ClientRectObject, PositioningStrategy } from '../interface';
import { viewport } from '../constants';
import { listScrollParents } from './listScrollParents';
import { isHTMLElement } from './isHTMLElement';
import { getOffsetParent } from './getOffsetParent';
import { isElement } from './isElement';
import { getNodeName } from './getNodeName';
import { contains } from './contains';
import { getBoundingClientRect } from './getBoundingClientRect';
import { rectToClientRect } from './rectToClientRect';
import { getViewportRect } from './getViewportRect';
import { getDocumentRect } from './getDocumentRect';
import { getDocumentElement } from './getDocumentElement';

function getInnerBoundingClientRect(element: Element) {
  const rect = getBoundingClientRect(element, false);

  rect.top += element.clientTop;
  rect.left += element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;

  return rect;
}

function getClientRectFromMixedType(
  element: Element,
  clippingParent: Element | RootBoundary,
  strategy: PositioningStrategy
): ClientRectObject {
  return clippingParent === viewport
    ? rectToClientRect(getViewportRect(element, strategy))
    : isElement(clippingParent)
    ? getInnerBoundingClientRect(clippingParent as Element)
    : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}

// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function getClippingParents(element: Element): Array<Element> {
  const clippingParents = listScrollParents(element) as any[];
  const canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element as HTMLElement) : element;

  if (!isElement(clipperElement)) {
    return [];
  }

  return clippingParents.filter(
    (clippingParent) =>
      isElement(clippingParent) &&
      contains(clippingParent as Element, clipperElement as HTMLElement) &&
      getNodeName(clippingParent as Element) !== 'body'
  );
}

// Gets the maximum area that the element is visible in due to any number of
// clipping parents
export function getClippingRect(
  element: Element,
  boundary: Boundary,
  rootBoundary: RootBoundary,
  strategy: PositioningStrategy
): ClientRectObject {
  const mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  const clippingParents = [...mainClippingParents, rootBoundary];
  const firstClippingParent = clippingParents[0];

  const clippingRect = clippingParents.reduce((accRect, clippingParent) => {
    const rect = getClientRectFromMixedType(element, clippingParent, strategy);

    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);

    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));

  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;

  return clippingRect;
}
