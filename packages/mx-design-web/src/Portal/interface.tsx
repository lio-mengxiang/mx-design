import React from 'react';

export interface PortalProps {
  /**
   * @zh 指定挂载的 HTML 节点, 默认挂载在 body
   * @en Specifies the mounted HTML node, which is mounted in the body by default
   */
  attach?: AttachNodeReturnValue;
  children: React.ReactNode;
}
export type AttachNodeReturnValue = HTMLElement | Element | Document | string;
