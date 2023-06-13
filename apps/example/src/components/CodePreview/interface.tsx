export interface CodePreviewProps {
  /**
   * `JSX` source code
   */
  code?: string;
  /**
   * Dependent component
   */
  dependencies?: Record<string, any>;
}
