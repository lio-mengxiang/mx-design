import React, { useEffect, useMemo } from 'react';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { NAME_SPACE_MESSAGE } from './locale';
import { useLocale } from '@/locale/useLocal/useLocal';
import { ComponentCodeBlock } from '@/components/DemoBlock';
import { exampleList } from './examples';

function SpinExample() {
  const [local] = useLocale<typeof NAME_SPACE_MESSAGE>({ namespace: NAME_SPACE_MESSAGE });
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
export default SpinExample;
