import type { IPosition } from '../interface';

export function getCardStyle(position: IPosition): React.CSSProperties {
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
