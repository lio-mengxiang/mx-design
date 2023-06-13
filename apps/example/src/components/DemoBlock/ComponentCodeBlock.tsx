import React from 'react';
import { DemoBlock } from '@/components/DemoBlock';
import { CodePreview } from '@/components/CodePreview';
// development mode
import * as MX from '../../../../../packages/mx-design-web/src';
// import * as MX from '@mx-design/web/index';

export function ComponentCodeBlock({ title, desc, code, namespace }) {
  return (
    <DemoBlock title={title} desc={desc} namespace={namespace}>
      <CodePreview code={code} dependencies={{ ...MX }} />
    </DemoBlock>
  );
}
