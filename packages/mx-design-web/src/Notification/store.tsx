import { useState } from 'react';
import { BOTTOM, BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_LEFT, TOP_RIGHT } from './constants';
import { getId, findToast, getToastPosition } from './utils';
// types
import type { IPosition, NotificationProps, NotificationState } from './interface';

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
  const [state, setState] = useState<NotificationState>({ ...initialState });

  return {
    state,
    add: (noticeProps: NotificationProps) => {
      const id: number = getId(noticeProps);
      setState((preState) => {
        if (noticeProps?.id) {
          const isExist = getToastPosition<NotificationState>(preState, noticeProps.id);
          if (isExist) return preState;
        }
        const position = noticeProps['position'] || defaultPosition;
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

    update: (id: number, options: NotificationProps) => {
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
      setState({ ...initialState });
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

export default useStore;
