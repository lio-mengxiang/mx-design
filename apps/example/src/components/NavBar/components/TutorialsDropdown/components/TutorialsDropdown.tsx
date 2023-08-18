import React from 'react';
import { Card } from './Card';

export function TutorialsDropdown(props) {
  const { lists, onClickMenuItem, onlick } = props;
  return (
    <>
      {lists.map((list, index) => (
        <Card
          {...list}
          key={index}
          onClickMenuItem={() => {
            onlick();
            onClickMenuItem();
          }}
        />
      ))}
    </>
  );
}
