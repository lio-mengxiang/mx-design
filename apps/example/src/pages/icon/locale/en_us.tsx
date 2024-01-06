import React from 'react';
import { Basic, Loading, Custom, IconFont, Data, DirectionIndicator, Editable, InteractiveButton, PromptSuggestion } from './constants';

export const en_us_icon = {
  [Basic]: {
    title: 'Basic',
    desc: (
      <>
        You can use Icon by<code className="mx-code">{`<IconXXX />`}</code>
      </>
    ),
  },
  [Loading]: {
    title: 'Spin',
    desc: (
      <>
        By specifying the<code className="mx-code">spin</code>field, the icon can be set to the spinning state
      </>
    ),
  },
  [Custom]: {
    title: 'Customize Icon',
    desc: (
      <>
        This example shows how to customize Icon.Use width<code className="mx-code">createIcon</code> to make
        <code className="mx-code">React Icon</code>component
      </>
    ),
  },
  [IconFont]: {
    title: 'Load Icon from iconfont.cn',
    desc: (
      <>
        Use<code className="mx-code">createFromIconfont</code>and pass in the<code className="mx-code">url link</code> of the Symbol in the
        iconfont
      </>
    ),
  },
  [PromptSuggestion]: {
    title: 'Prompt Suggestion Icon',
  },
  [DirectionIndicator]: {
    title: 'Direction Indicator Icon',
  },
  [Editable]: {
    title: 'Editable Icon',
  },
  [InteractiveButton]: {
    title: 'Interactive Button Icon',
  },
  [Data]: {
    title: 'Data Icon',
  },
};
