import { useEffect, useRef } from 'react';
import { MessageCardProps } from '../interface';

export function useTimer(props: MessageCardProps) {
  const { remove, id, duration, onClose } = props;

  const timer = useRef<any>(null);

  const startTimer = () => {
    if (duration == null) return undefined;
    timer.current = setTimeout(() => {
      remove?.(id);
      onClose?.();
      removeTimer();
    }, duration);
  };

  const removeTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => removeTimer();
  }, [duration]);

  const onMouseEnter = () => {
    removeTimer();
  };

  const onMouseLeave = () => {
    startTimer();
  };

  return {
    onMouseEnter,
    onMouseLeave,
  };
}
