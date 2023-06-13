import {
  AFFIX_KEY,
  ALERT_KEY,
  ANCHOR_KEY,
  BASIC_KEY,
  BUTTON_KEY,
  CHECKBOX_KEY,
  COMPONENTS_KEY,
  DATA_INPUT_KEY,
  DATA_SHOW_KEY,
  EMPTY_KEY,
  ICON_KEY,
  LAYOUT_TITLE_KEY,
  MESSAGE_KEY,
  MESSAGE_TITLE_KEY,
  NAVIGATE_KEY,
  NOTIFICATION_KEY,
  POPUP_KEY,
  RADIO_KEY,
  SPACE_KEY,
  SPIN_KEY,
  TOOLTIP_KEY,
} from '@/constants';

export const variants = {
  open: { width: 260 },
  closed: { width: 10, padding: 0 },
};

export const menu_variants = {
  open: { x: 0 },
  closed: { x: -250 },
};

export const btn_variants = {
  open: { x: 248 },
  closed: { x: 0 },
};

export const menuList = [
  {
    title: BASIC_KEY,
    children: [
      {
        title: BUTTON_KEY,
        path: `/${COMPONENTS_KEY}/${BUTTON_KEY}`,
      },
      {
        title: ICON_KEY,
        path: `/${COMPONENTS_KEY}/${ICON_KEY}`,
      },
    ],
  },
  {
    title: LAYOUT_TITLE_KEY,
    children: [
      {
        title: SPACE_KEY,
        path: `/${COMPONENTS_KEY}/${SPACE_KEY}`,
      },
    ],
  },
  {
    title: MESSAGE_TITLE_KEY,
    children: [
      {
        title: POPUP_KEY,
        path: `/${COMPONENTS_KEY}/${POPUP_KEY}`,
      },

      {
        title: ALERT_KEY,
        path: `/${COMPONENTS_KEY}/${ALERT_KEY}`,
      },
      {
        title: MESSAGE_KEY,
        path: `/${COMPONENTS_KEY}/${MESSAGE_KEY}`,
      },
      {
        title: NOTIFICATION_KEY,
        path: `/${COMPONENTS_KEY}/${NOTIFICATION_KEY}`,
      },
    ],
  },
  {
    title: DATA_SHOW_KEY,
    children: [
      {
        title: SPIN_KEY,
        path: `/${COMPONENTS_KEY}/${SPIN_KEY}`,
      },
      {
        title: EMPTY_KEY,
        path: `/${COMPONENTS_KEY}/${EMPTY_KEY}`,
      },
      {
        title: TOOLTIP_KEY,
        path: `/${COMPONENTS_KEY}/${TOOLTIP_KEY}`,
      },
    ],
  },
  {
    title: DATA_INPUT_KEY,
    children: [
      {
        title: CHECKBOX_KEY,
        path: `/${COMPONENTS_KEY}/${CHECKBOX_KEY}`,
      },
      {
        title: RADIO_KEY,
        path: `/${COMPONENTS_KEY}/${RADIO_KEY}`,
      },
    ],
  },
  {
    title: NAVIGATE_KEY,
    children: [
      {
        title: AFFIX_KEY,
        path: `/${COMPONENTS_KEY}/${AFFIX_KEY}`,
      },
      {
        title: ANCHOR_KEY,
        path: `/${COMPONENTS_KEY}/${ANCHOR_KEY}`,
      },
    ],
  },
];
