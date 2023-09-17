import React, { useMemo } from 'react';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { useLocale } from '@/locale/useLocal/useLocal';
import { exampleList } from './examples';
import { GRID_LAYOUT_KEY } from '@/constants';
import { ComponentCodeBlock } from '@/components/DemoBlock';

function GridLayoutExample() {
  const [local] = useLocale<typeof GRID_LAYOUT_KEY>({ namespace: GRID_LAYOUT_KEY });
  const dataList = useMemo(
    () =>
      Object.keys(local).map((key) => ({
        key,
        ...local[key],
        ...exampleList[key],
      })),
    [local]
  );

  const titleList = useMemo(
    () =>
      dataList.map((item) => ({
        title: item.title,
        href: `#${item.key}`,
      })),
    [dataList]
  );
  return (
    <ComponentInnerLayout titleList={titleList}>
      {dataList.map((data, index) => (
        <ComponentCodeBlock key={index} {...data} />
      ))}
    </ComponentInnerLayout>
  );
}

export default GridLayoutExample;
