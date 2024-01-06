import { useEffect } from 'react';

export const useEventListener = (event: string, handler: (...e: any) => void, target: any = window) => {
  useEffect(() => {
    if (!target || !target?.current) return;
    const targetElement = 'current' in target ? target.current : window;
    const useEventListener = (event: Event) => handler(event);
    targetElement.addEventListener(event, useEventListener);
    return () => {
      targetElement.removeEventListener(event, useEventListener);
    };
  }, [event, handler, target]);
};
