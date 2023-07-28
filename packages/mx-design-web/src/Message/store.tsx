import { useRef, useState } from 'react';
import { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_LEFT, TOP_RIGHT } from './constants';
import { getId, findToast, getToastPosition } from './utils';
// types
import type { MessageStates, MessageProps } from './interface';
import type { IPosition } from '../Notification';

// state
const initialState = {
  [TOP]: [],
  [TOP_LEFT]: [],
  [TOP_RIGHT]: [],
  [BOTTOM_LEFT]: [],
  [BOTTOM]: [],
  [BOTTOM_RIGHT]: [],
};

function useStore(defaultPosition: IPosition) {
  const [state, setState] = useState<MessageStates>({ ...initialState });

  return {
    state,
    add: (noticeProps: MessageProps) => {
      const id: number = getId(noticeProps);
      setState((preState) => {
        if (noticeProps?.id) {
          const isExist = getToastPosition<MessageStates>(preState, noticeProps.id);
          if (isExist) return preState;
        }
        const position = noticeProps.position || defaultPosition;
        const isTop = position.includes('top');
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

    update: (id: number, options: MessageProps) => {
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
      setState({ ...initialState });
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

export default useStore;
