import React from 'react';

export function removeLink(linkMap: React.MutableRefObject<Map<string, HTMLElement>>, hash: string) {
  linkMap.current.delete(hash);
}
