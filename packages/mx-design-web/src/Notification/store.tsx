import { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_LEFT, TOP_RIGHT } from './constants';
import { getId, findToast, getToastPosition } from './utils';
// types
import type { NotificationProps, NotificationState } from './interface';

// state
const initialState = {
  [TOP]: [],
  [TOP_LEFT]: [],
  [TOP_RIGHT]: [],
  [BOTTOM_LEFT]: [],
  [BOTTOM]: [],
  [BOTTOM_RIGHT]: [],
};

const copyInitialState = { ...initialState };

export const store = createStore(initialState);

export const NotificationStore = {
  add: store.add,
  update: store.update,
  remove: store.remove,
  clearAll: store.clearAll,
};

function createStore(initialState: NotificationState) {
  let state = initialState;
  const listeners = new Set<() => void>();

  const setState = (setStateFn: (values: NotificationState) => NotificationState) => {
    state = setStateFn(state);
    listeners.forEach((l) => l());
  };
  return {
    getState: () => state,

    subscribe: (listener) => {
      listeners.add(listener);
      return () => {
        setState(() => copyInitialState);
        listeners.delete(listener);
      };
    },

    add: (noticeProps: NotificationProps) => {
      const id: number = getId(noticeProps);
      setState((preState) => {
        if (noticeProps?.id) {
          const isExist = getToastPosition<NotificationState>(preState, noticeProps.id);
          if (isExist) return preState;
        }
        const position = noticeProps.position || TOP;
        const isTop = position.includes(TOP);
        const toasts = isTop
          ? [{ ...noticeProps, id }, ...(preState[position] ?? [])]
          : [...(preState[position] ?? []), { ...noticeProps, id }];

        return {
          ...preState,
          [position]: toasts,
        };
      });
      return noticeProps?.id ? noticeProps?.id : id;
    },

    update: (id: NotificationProps['id'], options: NotificationProps) => {
      if (!id) return;

      setState((prevState) => {
        const nextState = { ...prevState };
        const { position, index } = findToast<NotificationState>(nextState, id);

        if (position && index !== -1) {
          nextState[position][index] = {
            ...nextState[position][index],
            ...options,
          };
        }

        return nextState;
      });
    },

    clearAll: () => {
      setState(() => ({ ...copyInitialState }));
    },

    remove: (id: number) => {
      setState((prevState) => {
        const position = getToastPosition<NotificationState>(prevState, id);

        if (!position) return prevState;
        return {
          ...prevState,
          [position]: prevState[position].filter((notice) => {
            return notice.id !== id;
          }),
        };
      });
    },
  };
}
