import { useMemo } from 'react';

export function useMergeProps<PropsType>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
  globalComponentConfig: Partial<PropsType> | undefined
): PropsType {
  const _defaultProps = useMemo(() => ({ ...defaultProps, ...globalComponentConfig }), [defaultProps, globalComponentConfig]);

  return { ..._defaultProps, ...componentProps };
}
