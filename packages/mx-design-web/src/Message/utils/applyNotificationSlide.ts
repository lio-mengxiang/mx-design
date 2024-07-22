import { Variants } from 'framer-motion';
import { BOTTOM_LEFT, BOTTOM_RIGHT, TOP, TOP_LEFT, TOP_RIGHT } from '../constants';

export const applyNotificationSlide: Variants = {
  initial: (props) => {
    const { position } = props;
    const isTop = [TOP_RIGHT, TOP_LEFT, TOP].includes(position);

    return {
      opacity: 0,
      scaleX: 0.5,
      y: isTop ? -80 : 80,
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (props) => {
    const { position } = props;

    const isRight = [TOP_RIGHT, BOTTOM_RIGHT].includes(position);
    const isTop = [TOP_RIGHT, TOP_LEFT, TOP].includes(position);
    const isLeft = [TOP_LEFT, BOTTOM_LEFT].includes(position);
    const result: Record<string, any> = {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    };

    result.y = isTop ? -60 : 60;

    if (isRight) {
      result.x = -10;
      return result;
    }

    if (isLeft) {
      result.x = 10;
      return result;
    }

    result.scaleX = 0.5;

    return result;
  },
};
