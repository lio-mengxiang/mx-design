import { viewport } from './constants';
import type { top, bottom, right, left, popper, reference, start, end, clippingParents } from './constants';

export type VisualViewport = EventTarget & {
  width: number;
  height: number;
  offsetLeft: number;
  offsetTop: number;
  scale: number;
};

export type Func = (...args: any[]) => any;
export type BasePlacement = typeof top | typeof bottom | typeof right | typeof left;
export type VariationPlacement =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end';
export type Context = typeof popper | typeof reference;
export type Variation = typeof start | typeof end;
export type Boundary = Element | Array<Element> | typeof clippingParents;
export type RootBoundary = typeof viewport | 'document';
export type Placement = BasePlacement | VariationPlacement;

export type Obj = {
  [key: string]: any;
};

export type Rect = {
  width: number;
  height: number;
  x: number;
  y: number;
};

export type Offsets = {
  y: number;
  x: number;
};

export type PositioningStrategy = 'absolute' | 'fixed';

export type StateRects = {
  reference: Rect;
  popper: Rect;
};

export declare type StateOffsets = {
  popper: Offsets;
  arrow?: Offsets;
};

type OffsetData = {
  [key in Placement]?: Offsets;
};

export type State = {
  elements: {
    reference: Element | VirtualElement;
    popper: HTMLElement;
    arrow?: HTMLElement;
  };
  options: OptionsGeneric<any>;
  placement: Placement;
  strategy: PositioningStrategy;
  orderedModifiers: Array<Modifier<any, any>>;
  rects: StateRects;
  scrollParents: {
    reference: Array<Element | Window | VisualViewport>;
    popper: Array<Element | Window | VisualViewport>;
  };
  styles: {
    [key: string]: Partial<CSSStyleDeclaration>;
  };
  attributes: {
    [key: string]: {
      [key: string]: string | boolean;
    };
  };
  modifiersData: {
    arrow?: {
      x?: number;
      y?: number;
      centerOffset: number;
    };
    hide?: {
      isReferenceHidden: boolean;
      hasPopperEscaped: boolean;
      referenceClippingOffsets: SideObject;
      popperEscapeOffsets: SideObject;
    };
    offset?: OffsetData;
    preventOverflow?: Offsets;
    popperOffsets?: Offsets;
    [key: string]: any;
  };
  reset?: boolean;
};
declare type SetAction<S> = S | ((prev: S) => S);
export type Instance = {
  state: State;
  destroy: () => void;
  forceUpdate: () => void;
  update: () => Promise<State>;
  setOptions: (setOptionsAction: SetAction<Partial<OptionsGeneric<any>>>) => Promise<State>;
};
export declare type ModifierArguments<Options extends Obj> = {
  state: State;
  instance: Instance;
  options: Options;
  name: string;
};
export declare type Modifier<Name, Options extends Obj> = {
  name: Name;
  enabled: boolean;
  fn: (arg0: ModifierArguments<Options>) => State | void;
  effect?: (arg0: ModifierArguments<Options>) => (() => void) | void;
  options?: Options;
  data?: Obj;
};

export declare type EventListeners = {
  scroll: boolean;
  resize: boolean;
};
export declare type Options = {
  placement: Placement;
  modifiers: Array<Partial<Modifier<any, any>>>;
  strategy: PositioningStrategy;
  onFirstUpdate?: (arg0: State) => void;
};
export type OptionsGeneric<TModifier> = {
  placement: Placement;
  modifiers: Array<TModifier>;
  strategy: PositioningStrategy;
  onFirstUpdate?: (arg0: State) => void;
};
export declare type UpdateCallback = (arg0: State) => void;
export declare type ClientRectObject = {
  x: number;
  y: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
};
export declare type SideObject = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};
export declare type Padding = number | Partial<SideObject>;
export declare type VirtualElement = {
  // eslint-disable-next-line no-undef
  getBoundingClientRect: () => ClientRect | DOMRect;
};

export type Window = {
  innerHeight: number;
  offsetHeight: number;
  innerWidth: number;
  offsetWidth: number;
  pageXOffset: number;
  pageYOffset: number;
  getComputedStyle: typeof getComputedStyle;
  addEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
  removeEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
  Element: Element;
  HTMLElement: HTMLElement;
  Node: Node;
  toString(): '[object Window]';
  devicePixelRatio: number;
  visualViewport?: VisualViewport;
};
