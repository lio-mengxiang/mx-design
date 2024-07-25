import { Variants } from 'framer-motion';
import { BOTTOM_LEFT, BOTTOM_RIGHT, TOP_LEFT, TOP_RIGHT } from '../constants';

export const applyNotificationSlide: Variants = {
  initial: (props) => {
    const { position } = props;
    const isRight = [TOP_RIGHT, BOTTOM_RIGHT].includes(position);

    return {
      x: isRight ? 200 : -200,
      opacity: 0,
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (props) => {
    const { position } = props;

    const isRight = [TOP_RIGHT, BOTTOM_RIGHT].includes(position);
    const isLeft = [TOP_LEFT, BOTTOM_LEFT].includes(position);
    const result: Record<string, any> = {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    };
    if (isRight) {
      result.x = 200;
      return result;
    }

    if (isLeft) {
      result.x = -200;
      return result;
    }
    result.scale = 0.85;
    return result;
  },
};
