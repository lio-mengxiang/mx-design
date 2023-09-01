import React from 'react';
import * as MX from '@mx-design/web';
import { DemoBlock } from '@/components/DemoBlock';
import { CodePreview } from '@/components/CodePreview';

export function ComponentCodeBlock({ title, desc, code, namespace, demoContainerStyle }) {
  return (
    <DemoBlock title={title} desc={desc} namespace={namespace}>
      <CodePreview code={code} dependencies={{ ...MX }} demoContainerStyle={demoContainerStyle} />
    </DemoBlock>
  );
}
