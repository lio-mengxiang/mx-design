import React from 'react';
import copy from 'copy-to-clipboard';

/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param timeout delay (in ms) to switch back to initial state once copied.
 */
export const useClipboard = (text: string, timeout = 1500) => {
  const [copied, setCopied] = React.useState(false);

  const onCopy = React.useCallback(() => {
    setCopied(copy(text));
  }, [text]);

  React.useEffect(() => {
    let timeoutId: number | null = null;

    if (copied) {
      timeoutId = window.setTimeout(() => {
        setCopied(false);
      }, timeout);
    }
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, copied]);

  return { value: text, onCopy, copied };
};
