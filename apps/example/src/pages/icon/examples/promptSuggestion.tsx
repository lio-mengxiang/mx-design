import React from 'react';
import { LinePromptSuggestion, FillPromptSuggestion } from '@mx-design/web';
import styles from '../style/index.module.less';
import IconItem from './iconItem';
import { PromptSuggestion } from '../locale';

const getLinePromptSuggestionIcon = () =>
  Object.keys(LinePromptSuggestion).map((Item, index) => {
    const I = LinePromptSuggestion[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

const getFillPromptSuggestionIcon = () =>
  Object.keys(FillPromptSuggestion).map((Item, index) => {
    const I = FillPromptSuggestion[Item];
    return <IconItem Icon={I} Item={Item} key={index} />;
  });

export const promptSuggestion = {
  component: (
    <div className={styles['icon-container']}>
      {getLinePromptSuggestionIcon()} {getFillPromptSuggestionIcon()}
    </div>
  ),
  namespace: PromptSuggestion,
};
