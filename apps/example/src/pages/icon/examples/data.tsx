import React from 'react';
import { LineData } from '@mx-design/web';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { Data } from '../locale';

const getLineDataIcon = () =>
  Object.keys(LineData).map((Item, index) => {
    const I = LineData[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
export const data = {
  component: <div className={styles['icon-container']}>{getLineDataIcon()}</div>,
  namespace: Data,
};
