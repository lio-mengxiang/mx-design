import React from 'react';

export function inputAddon(className: string, node: React.ReactNode, style: object = {}): React.ReactNode | null {
  return node ? (
    <span style={style} className={className} tabIndex={-1}>
      {node}
    </span>
  ) : null;
}
