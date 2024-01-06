import React, { useMemo } from 'react';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { INPUT_TAG } from '@/constants';
import { useLocale } from '@/locale/useLocal/useLocal';
import { exampleList } from './examples';
import { ComponentCodeBlock } from '@/components/DemoBlock';

function SelectInputExample() {
  const [local] = useLocale<typeof INPUT_TAG>({ namespace: INPUT_TAG });
  const dataList = useMemo(
    () =>
      Object.keys(local).map((key) => ({
        ...local[key],
        ...exampleList[key],
      })),
    [local, exampleList]
  );

  const titleList = useMemo(
    () =>
      dataList.map((item) => ({
        title: item.title,
        href: `#${item.namespace}`,
      })),
    [dataList]
  );

  return (
    <ComponentInnerLayout titleList={titleList}>
      {dataList.map((data) => (
        <ComponentCodeBlock key={data.namespace} {...data} />
      ))}
    </ComponentInnerLayout>
  );
}
export default SelectInputExample;
