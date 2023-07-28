import type { CSSProperties } from 'react';
import type { IPosition } from '../../Notification';

export function getCardStyle(position: IPosition): CSSProperties {
  const isRighty = position.includes('right');
  const isLefty = position.includes('left');

  let alignItems = 'center';
  if (isRighty) alignItems = 'flex-end';
  if (isLefty) alignItems = 'flex-start';

  return {
    display: 'flex',
    justifyContent: alignItems,
    marginBottom: '12px',
  };
}
