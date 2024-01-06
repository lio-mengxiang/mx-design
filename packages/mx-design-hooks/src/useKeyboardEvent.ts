import { useCallback, KeyboardEventHandler } from 'react';

type CallBackEventType = 'onPressEnter' | 'onArrowUp' | 'onArrowLeft' | 'onArrowRight' | 'onArrowDown';

export function useKeyboardEvent(props?: { onKeyDown?: KeyboardEventHandler }) {
  const getEventListeners = useCallback((callbacks: { [key in CallBackEventType]?: (e) => void }) => {
    return {
      onKeyDown: (e) => {
        const { key } = e;

        if (key === 'Enter') {
          callbacks.onPressEnter?.(e);
        }
        if (key === 'ArrowDown') {
          callbacks.onArrowDown?.(e);
        }
        if (key === 'ArrowLeft') {
          callbacks.onArrowLeft?.(e);
        }
        if (key === 'ArrowRight') {
          callbacks.onArrowRight?.(e);
        }
        if (key === 'ArrowUp') {
          callbacks.onArrowUp?.(e);
        }
        props?.onKeyDown?.(e);
      },
    };
  }, []);
  return getEventListeners;
}
