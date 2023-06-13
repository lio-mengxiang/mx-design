import React, { useMemo } from 'react';

interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage(props: ErrorMessageProps) {
  const { message } = props;
  return useMemo(() => {
    if (!message) return null;
    return (
      <pre>
        <code>{message}</code>
      </pre>
    );
  }, [message]);
}
