import React from 'react';
import * as LinePromptSuggestionIcons from '@mx-design/web/esm/Icon/react-icon/LinePromptSuggestion';
import * as FillPromptSuggestionIcons from '@mx-design/web/esm/Icon/react-icon/FillPromptSuggestion';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { PromptSuggestion } from '../locale';

const getLinePromptSuggestionIcon = () => {
  return Object.keys(LinePromptSuggestionIcons).map((Item, index) => {
    const I = LinePromptSuggestionIcons[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
};

const getFillPromptSuggestionIcon = () => {
  return Object.keys(FillPromptSuggestionIcons).map((Item, index) => {
    const I = FillPromptSuggestionIcons[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });
};

export const promptSuggestion = {
  component: (
    <div className={styles['icon-container']}>
      {getLinePromptSuggestionIcon()} {getFillPromptSuggestionIcon()}
    </div>
  ),
  namespace: PromptSuggestion,
};
