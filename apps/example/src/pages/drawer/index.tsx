import React, { useMemo } from 'react';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { DRAWER_KEY } from '@/constants';
import { useLocale } from '@/locale/useLocal/useLocal';
import { ComponentCodeBlock } from '@/components/DemoBlock';
import { exampleList } from './examples';

function DrawerExample() {
  const [local] = useLocale<typeof DRAWER_KEY>({ namespace: DRAWER_KEY });
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
export default DrawerExample;
