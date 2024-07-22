import React from 'react';

export function addLink(linkMap: React.MutableRefObject<Map<string, HTMLElement>>, hash: string, element: HTMLElement) {
  if (hash) {
    linkMap.current.set(hash, element);
  }
}
