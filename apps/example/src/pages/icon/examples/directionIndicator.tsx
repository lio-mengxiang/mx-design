import React from 'react';
import * as LineDirectionIndicatorIcons from '@mx-design/web/esm/Icon/react-icon/LineDirectionIndicator';
import * as FillDirectionIndicatorIcons from '@mx-design/web/esm/Icon/react-icon/FillDirectionIndicator';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { DirectionIndicator } from '../locale';

const getLineDirectionIndicatorIcon = () => {
  return Object.keys(LineDirectionIndicatorIcons).map((Item, index) => {
    const I = LineDirectionIndicatorIcons[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
};

const getFillDirectionIndicatorIcon = () => {
  return Object.keys(FillDirectionIndicatorIcons).map((Item, index) => {
    const I = FillDirectionIndicatorIcons[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
};

export const directionIndicator = {
  component: (
    <div className={styles['icon-container']}>
      {getLineDirectionIndicatorIcon()}
      {getFillDirectionIndicatorIcon()}
    </div>
  ),
  namespace: DirectionIndicator,
};
