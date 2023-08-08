import { Variants } from 'framer-motion';
import { EN_US, ZN_CH } from '../locale/constants';

export const modalAnimation: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -10,
  },
};

export const maskAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const MODAL_NAMESPACE = 'Modal';

export const MODAL_LOCAL = {
  [EN_US]: {
    OK_TEXT: 'Ok',
    CANCEL_TEXT: 'Cancel',
  },
  [ZN_CH]: {
    OK_TEXT: '确定',
    CANCEL_TEXT: '取消',
  },
};
