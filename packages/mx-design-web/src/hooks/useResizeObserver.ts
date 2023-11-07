import { useLayoutEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export function useResizeObserver<T extends HTMLElement>(element, callback: (target: T, entry: ResizeObserverEntry) => void) {
  useLayoutEffect(() => {
    if (!element) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      callback(element, entries[0]);
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);
}
