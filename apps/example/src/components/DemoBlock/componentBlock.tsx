import React from 'react';
import { DemoBlock } from '@/components/DemoBlock';

export function ComponentBlock({ title, desc, component, namespace }) {
  return (
    <DemoBlock title={title} desc={desc} namespace={namespace}>
      {component}
    </DemoBlock>
  );
}
