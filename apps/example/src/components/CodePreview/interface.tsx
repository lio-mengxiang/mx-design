import { CSSProperties } from 'react';

export interface CodePreviewProps {
  /**
   * `JSX` source code
   */
  code?: string;
  /**
   * Dependent component
   */
  dependencies?: Record<string, any>;
  demoContainerStyle: CSSProperties;
}
