import { useLayoutEffect } from 'react';
import { setCssVariables } from '@mx-design/web-utils';

export function useGlobalTheme(variables) {
  useLayoutEffect(() => {
    setCssVariables(variables);
  }, [variables]);
}
