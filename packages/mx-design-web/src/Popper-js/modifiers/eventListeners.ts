import type { ModifierArguments, Modifier } from '../interface';

export type Options = {
  scroll: boolean;
  resize: boolean;
};

const passive = { passive: true };

function effect({ state, instance, options }: ModifierArguments<Options>) {
  const { scroll = true, resize = true } = options;
  const scrollParents = [...new Set([...state.scrollParents.reference, ...state.scrollParents.popper])];

  // const scrollParents = [...state.scrollParents.reference, ...state.scrollParents.popper];

  if (scroll) {
    scrollParents.forEach((scrollParent) => {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return () => {
    if (scroll) {
      scrollParents.forEach((scrollParent) => {
        scrollParent.removeEventListener('scroll', instance.update);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update);
    }
  };
}

export type EventListenersModifier = Modifier<'eventListeners', Options>;

export default {
  name: 'eventListeners',
  enabled: true,
  fn: () => {},
  effect,
  data: {},
} as EventListenersModifier;
