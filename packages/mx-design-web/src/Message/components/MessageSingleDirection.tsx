import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useClassNames } from '../hooks';
import { MessageCardContainer } from './MessageCardContainer';

export function MessageSingleDirection({ state, position, getPrefixCls, props, remove }) {
  const messages = state[position];
  // classnames
  const { wrapperClassNames } = useClassNames({ getPrefixCls, position });

  return (
    <div role="region" aria-live="polite" key={position} className={wrapperClassNames}>
      <AnimatePresence initial={false}>
        {messages.map((notice) => (
          <MessageCardContainer key={notice.id} position={position} {...props} {...notice} remove={remove} />
        ))}
      </AnimatePresence>
    </div>
  );
}
