import React from 'react';
import { LineEditable, FillEditable } from '@mx-design/web';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { Editable } from '../locale';

const getLineEditableIcon = () =>
  Object.keys(LineEditable).map((Item, index) => {
    const I = LineEditable[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
const getFillEditableIcon = () =>
  Object.keys(FillEditable).map((Item, index) => {
    const I = FillEditable[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

export const editable = {
  component: (
    <div className={styles['icon-container']}>
      {getLineEditableIcon()}
      {getFillEditableIcon()}
    </div>
  ),
  namespace: Editable,
};
