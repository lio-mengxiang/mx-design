import React from 'react';
import { DemoBlock } from '@/components/DemoBlock';
import { CodePreview } from '@/components/CodePreview';
import * as MX from '@mx-design/web';

export function ComponentCodeBlock({ title, desc, code, namespace }) {
  return (
    <DemoBlock title={title} desc={desc} namespace={namespace}>
      <CodePreview code={code} dependencies={{ ...MX }} />
    </DemoBlock>
  );
}
