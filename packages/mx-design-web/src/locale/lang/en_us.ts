import { ALERT_LOCAL, ALERT_NAMESPACE } from '../../Alert/constants';
import { DRAWER_LOCAL, DRAWER_NAMESPACE } from '../../Drawer/constants';
import { EMPTY_LOCAL, EMPTY_NAMESPACE } from '../../Empty/constants';
import { MODAL_LOCAL, MODAL_NAMESPACE } from '../../Modal/constants';
import { EN_US } from '../constants';

export const mx_en_us = {
  [EMPTY_NAMESPACE]: EMPTY_LOCAL[EN_US],
  [ALERT_NAMESPACE]: ALERT_LOCAL[EN_US],
  [MODAL_NAMESPACE]: MODAL_LOCAL[EN_US],
  [DRAWER_NAMESPACE]: DRAWER_LOCAL[EN_US],
};
