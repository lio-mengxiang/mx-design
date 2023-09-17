import React from 'react';
import { Card } from './Card';

export function TutorialsDropdown(props) {
  const { lists, onClickMenuItem } = props;

  return (
    <>
      {lists.map((list, index) => (
        <Card {...list} key={index} onClickMenuItem={onClickMenuItem} isLast={index === lists.length - 1} />
      ))}
    </>
  );
}
