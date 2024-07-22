import { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_LEFT, TOP_RIGHT } from './constants';
import { getId, findToast, getToastPosition } from './utils';
// types
import type { MessageStates, MessageProps } from './interface';

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

export const MessageStore = {
  add: store.add,
  update: store.update,
  remove: store.remove,
  clearAll: store.clearAll,
};

function createStore(initialState: MessageStates) {
  let state = initialState;
  const listeners = new Set<() => void>();

  const setState = (setStateFn: (values: MessageStates) => MessageStates) => {
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

    add: (noticeProps: MessageProps) => {
      const id: number = getId(noticeProps);
      setState((preState) => {
        if (noticeProps?.id) {
          const isExist = getToastPosition<MessageStates>(preState, noticeProps.id);
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

    update: (id: MessageProps['id'], options: MessageProps) => {
      if (!id) return;

      setState((preState) => {
        const nextState = { ...preState };
        const { position, index } = findToast<MessageStates>(nextState, id);

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
        const position = getToastPosition<MessageStates>(prevState, id);

        if (!position) return prevState;
        return {
          ...prevState,
          [position]: prevState[position].filter((notice) => notice.id !== id),
        };
      });
    },
  };
}
