import { useEffect, useRef } from 'react';
import { resetContainerStyle, setContainerStyle } from '../utils';

export function useOverflowHidden(getContainer: () => HTMLElement, hidden: boolean) {
  const needResetContainerStyle = useRef<boolean>(false);
  const originContainerStyle = useRef<Partial<CSSStyleDeclaration>>({});

  useEffect(() => {
    hidden
      ? setContainerStyle({ needResetContainerStyle, originContainerStyle, getContainer })
      : resetContainerStyle({ needResetContainerStyle, originContainerStyle, getContainer });
    return () => {
      resetContainerStyle({ needResetContainerStyle, originContainerStyle, getContainer });
    };
  }, [getContainer, hidden]);
}
