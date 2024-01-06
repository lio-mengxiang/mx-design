import { MutableRefObject } from 'react';

export function scrollToTop(refTableBody: MutableRefObject<HTMLElement>) {
  const tableBody = refTableBody.current;
  if (!tableBody) {
    return;
  }
  tableBody.scrollTop = 0;
}
