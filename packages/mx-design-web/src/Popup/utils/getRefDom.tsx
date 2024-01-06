import React from 'react';

export function getRefDom(domRef: React.RefObject<any>) {
  if (domRef.current && typeof domRef.current === 'object' && 'dom' in domRef.current) {
    return domRef.current.dom;
  }
  return domRef.current;
}
