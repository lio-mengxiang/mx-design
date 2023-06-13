import React from 'react';
import * as LineInteractiveButton from '@mx-design/web/esm/Icon/react-icon/LineInteractiveButton';
import * as FillInteractiveButton from '@mx-design/web/esm/Icon/react-icon/FillInteractiveButton';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { InteractiveButton } from '../locale';

const getLineInteractiveButtonIcon = () => {
  return Object.keys(LineInteractiveButton).map((Item, index) => {
    const I = LineInteractiveButton[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
};

const getFillInteractiveButtonIcon = () => {
  return Object.keys(FillInteractiveButton).map((Item, index) => {
    const I = FillInteractiveButton[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
};
export const interactiveButton = {
  component: (
    <div className={styles['icon-container']}>
      {getLineInteractiveButtonIcon()}
      {getFillInteractiveButtonIcon()}
    </div>
  ),
  namespace: InteractiveButton,
};
