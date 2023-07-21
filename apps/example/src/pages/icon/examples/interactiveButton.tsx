import React from 'react';
import { LineInteractiveButton, FillInteractiveButton } from '@mx-design/web';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { InteractiveButton } from '../locale';

const getLineInteractiveButtonIcon = () =>
  Object.keys(LineInteractiveButton).map((Item, index) => {
    const I = LineInteractiveButton[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

const getFillInteractiveButtonIcon = () =>
  Object.keys(FillInteractiveButton).map((Item, index) => {
    const I = FillInteractiveButton[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
export const interactiveButton = {
  component: (
    <div className={styles['icon-container']}>
      {getLineInteractiveButtonIcon()}
      {getFillInteractiveButtonIcon()}
    </div>
  ),
  namespace: InteractiveButton,
};
