import React from 'react';
import { LineDirectionIndicator, FillDirectionIndicator } from '@mx-design/web';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { DirectionIndicator } from '../locale';

const getLineDirectionIndicatorIcon = () =>
  Object.keys(LineDirectionIndicator).map((Item, index) => {
    const I = LineDirectionIndicator[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

const getFillDirectionIndicatorIcon = () =>
  Object.keys(FillDirectionIndicator).map((Item, index) => {
    const I = FillDirectionIndicator[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

export const directionIndicator = {
  component: (
    <div className={styles['icon-container']}>
      {getLineDirectionIndicatorIcon()}
      {getFillDirectionIndicatorIcon()}
    </div>
  ),
  namespace: DirectionIndicator,
};
