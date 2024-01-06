import React, { useMemo } from 'react';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { useLocale } from '@/locale/useLocal/useLocal';
import { exampleList } from './examples';
import { DROPDOWN_KEY } from '@/constants';
import { ComponentCodeBlock } from '@/components/DemoBlock';

function PopupExample() {
  const [local] = useLocale<typeof DROPDOWN_KEY>({ namespace: DROPDOWN_KEY });
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

export default PopupExample;
