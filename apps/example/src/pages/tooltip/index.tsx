import React, { useMemo } from 'react';
import ComponentInnerLayout from '@/components/Layout/ComponentInnerLayout';
import { useLocale } from '@/locale/useLocal/useLocal';
import { exampleList } from './examples';
import { NAME_SPACE_TOOLTIP } from './locale';
import { ComponentCodeBlock } from '@/components/DemoBlock';

function TooltipExample() {
  const [local] = useLocale<typeof NAME_SPACE_TOOLTIP>({ namespace: NAME_SPACE_TOOLTIP });
  const dataList = useMemo(
    () =>
      Object.keys(local).map((key) => ({
        key,
        ...local[key],
        ...exampleList[key],
      })),
    [local, exampleList]
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
      {dataList.map((data) => (
        <ComponentCodeBlock {...data} />
      ))}
    </ComponentInnerLayout>
  );
}

export default TooltipExample;
