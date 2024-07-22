import { useEffect, useRef } from 'react';

/**
 * @zh 获取当前组件是否已经卸载的 Hook
 * @en get the status if component had been unmounted
 */
export const useUnmountedRef = () => {
  const unmountedRef = useRef(false);
  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
};
