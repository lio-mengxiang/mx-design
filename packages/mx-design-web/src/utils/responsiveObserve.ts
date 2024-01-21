import { responsiveMap } from './constants';
import type { Breakpoint, ScreenMap, SubscribeFunc } from './interface';

let subscribers: Array<{
  token: string;
  func: SubscribeFunc;
}> = [];
let subUid = -1;
let screens = {};

export const responsiveObserve = {
  matchHandlers: {},
  dispatch(pointMap: ScreenMap, breakpointChecked: Breakpoint) {
    screens = pointMap;
    if (subscribers.length < 1) {
      return false;
    }

    subscribers.forEach((item) => {
      item.func(screens, breakpointChecked);
    });

    return true;
  },
  subscribe(func: SubscribeFunc) {
    if (subscribers.length === 0) {
      this.register();
    }
    const token = (++subUid).toString();
    subscribers.push({
      token,
      func,
    });
    // screens includes what media size is in current window
    func(screens, null);
    return token;
  },
  unsubscribe(token: string) {
    subscribers = subscribers.filter((item) => item.token !== token);
    if (subscribers.length === 0) {
      this.unregister();
    }
  },
  unregister() {
    Object.keys(responsiveMap).forEach((screen: Breakpoint) => {
      const matchMediaQuery = responsiveMap[screen];
      const handler = this.matchHandlers[matchMediaQuery];
      if (handler && handler.mql && handler.listener) {
        handler.mql.removeListener(handler.listener);
      }
    });
  },
  register() {
    Object.keys(responsiveMap).forEach((screen: Breakpoint) => {
      // '(max-width: 575px)'
      const matchMediaQuery = responsiveMap[screen];
      const listener = ({ matches }: { matches: boolean }) => {
        this.dispatch(
          {
            ...screens,
            [screen]: matches,
          },
          screen
        );
      };
      // per match media will add event listener
      const mql = window.matchMedia(matchMediaQuery);
      mql.addListener(listener);
      this.matchHandlers[matchMediaQuery] = {
        mql,
        listener,
      };

      listener(mql);
    });
  },
};
