import React from 'react';

export function getRefDom(domRef: React.RefObject<any>) {
  if (domRef.current && typeof domRef.current === 'object' && 'currentElement' in domRef.current) {
    return domRef.current.currentElement;
  }
  return domRef.current;
}
