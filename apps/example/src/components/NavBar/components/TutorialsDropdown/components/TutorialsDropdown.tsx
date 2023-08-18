import React, { useRef } from 'react';
import { Card } from './Card';
import { NAME_SPACE_NAV_BAR } from '../locale';
import { useLocale } from '@/locale/useLocal/useLocal';

export function TutorialsDropdown(props) {
  const [local] = useLocale<typeof NAME_SPACE_NAV_BAR>({ namespace: NAME_SPACE_NAV_BAR });

  const listRef = useRef([]);

  return (
    <>
      {listRef.current.map((list) => (
        <Card {...list} onClickMenuItem={props?.onClickMenuItem} />
      ))}
    </>
  );
}
