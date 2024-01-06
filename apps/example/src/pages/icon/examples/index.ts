import { basic } from './basic';
import { loading } from './loading';
import { custom } from './custom';
import { iconFont } from './iconFont';
import { promptSuggestion } from './promptSuggestion';
import { directionIndicator } from './directionIndicator';
import { editable } from './editable';
import { interactiveButton } from './interactiveButton';
import { data } from './data';

export const exampleList = {
  [basic.namespace]: basic,
  [loading.namespace]: loading,
  [custom.namespace]: custom,
  [iconFont.namespace]: iconFont,
  [promptSuggestion.namespace]: promptSuggestion,
  [directionIndicator.namespace]: directionIndicator,
  [editable.namespace]: editable,
  [interactiveButton.namespace]: interactiveButton,
  [data.namespace]: data,
};
