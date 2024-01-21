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
  DRAWER_KEY,
  DROPDOWN_KEY,
  EMPTY_KEY,
  GRID_LAYOUT_KEY,
  ICON_KEY,
  INPUT_KEY,
  INPUT_TAG,
  LAYOUT_TITLE_KEY,
  MESSAGE_KEY,
  MESSAGE_TITLE_KEY,
  MODAL_KEY,
  NAVIGATE_KEY,
  NOTIFICATION_KEY,
  PAGINATION_KEY,
  POPUP_KEY,
  RADIO_KEY,
  SPACE_KEY,
  SPIN_KEY,
  SWITCH_KEY,
  TABLE_KEY,
  TAG_KEY,
  TOOLTIP_KEY,
} from '@/constants';

export const componentsMenuList = [
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
      {
        title: GRID_LAYOUT_KEY,
        path: `/${COMPONENTS_KEY}/${GRID_LAYOUT_KEY}`,
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
      {
        title: MODAL_KEY,
        path: `/${COMPONENTS_KEY}/${MODAL_KEY}`,
      },
      {
        title: DRAWER_KEY,
        path: `/${COMPONENTS_KEY}/${DRAWER_KEY}`,
      },
    ],
  },
  {
    title: DATA_SHOW_KEY,
    children: [
      {
        title: TABLE_KEY,
        path: `/${COMPONENTS_KEY}/${TABLE_KEY}`,
      },
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
      {
        title: TAG_KEY,
        path: `/${COMPONENTS_KEY}/${TAG_KEY}`,
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
      {
        title: INPUT_KEY,
        path: `/${COMPONENTS_KEY}/${INPUT_KEY}`,
      },
      {
        title: SWITCH_KEY,
        path: `/${COMPONENTS_KEY}/${SWITCH_KEY}`,
      },
      {
        title: INPUT_TAG,
        path: `/${COMPONENTS_KEY}/${INPUT_TAG}`,
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
      {
        title: PAGINATION_KEY,
        path: `/${COMPONENTS_KEY}/${PAGINATION_KEY}`,
      },
      {
        title: DROPDOWN_KEY,
        path: `/${COMPONENTS_KEY}/${DROPDOWN_KEY}`,
      },
    ],
  },
];
