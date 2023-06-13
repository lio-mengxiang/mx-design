import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { generateElement } from '../utils';
import { CodePreviewProps } from '../interface';

type ProviderState = {
  element?: ComponentType | null;
  error?: string;
};

export function useCodePreview(props: CodePreviewProps) {
  const { code, dependencies } = props;
  const [state, setState] = useState<ProviderState>({ error: undefined, element: null });
  const [showEdit, setShowEdit] = useState(false);

  async function transpileAsync(newCode: string) {
    const errorCallback = (error: Error) => {
      setState({ error: error.toString(), element: undefined });
    };

    try {
      const transformedCode = await Promise.resolve(newCode);
      const renderElement = (element) => setState({ error: undefined, element });

      if (typeof transformedCode !== 'string') {
        throw new Error('Code failed to transform');
      }

      renderElement(generateElement({ input: transformedCode, dependencies: props.dependencies, errorCallback }));
    } catch (error) {
      return errorCallback(error as Error);
    }
  }

  const onError = (error: Error) => setState({ error: error.toString() });

  useEffect(() => {
    transpileAsync(code).catch(onError);
  }, [code, dependencies]);

  const onChange = (newCode: string) => {
    transpileAsync(newCode).catch(onError);
  };

  return {
    state,
    showEdit,
    setShowEdit,
    onChange,
  };
}
