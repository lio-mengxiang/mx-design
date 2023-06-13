import { Variants } from 'framer-motion';
import { PopupProps } from '../interface';

export function applyPopupSlide(placement: PopupProps['placement']): Variants {
  if (placement === 'top' || placement === 'top-end' || placement === 'top-start') {
    return {
      initial: {
        opacity: 0,
        y: '20%',
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: '-20%',
      },
    };
  }
  if (placement === 'bottom' || placement === 'bottom-end' || placement === 'bottom-start') {
    return {
      initial: {
        opacity: 0,
        y: '-20%',
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: '20%',
      },
    };
  }
  if (placement === 'left' || placement === 'left-end' || placement === 'left-start') {
    return {
      initial: {
        opacity: 0,
        x: '20%',
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: '-20%',
      },
    };
  }
  if (placement === 'right' || placement === 'right-end' || placement === 'right-start') {
    return {
      initial: {
        opacity: 0,
        x: '-20%',
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: '20%',
      },
    };
  }
}
