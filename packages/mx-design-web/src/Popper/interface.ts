import type { Options as PopperOptions, State as PopperState, Instance as PopperInstance } from '../Popper-js/interface';

export type Options = Partial<PopperOptions>;

type Styles = {
  [key: string]: Partial<CSSStyleDeclaration>;
};
type Attributes = {
  [key: string]: { [key: string]: string };
};

export type State = {
  styles: Styles;
  attributes: Attributes;
};

export type UsePopperResult = {
  state?: PopperState;
  styles: Styles;
  attributes: Attributes;
  update?: PopperInstance['update'];
  forceUpdate?: PopperInstance['forceUpdate'];
};
