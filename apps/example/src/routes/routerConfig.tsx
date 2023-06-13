import { Navigate } from 'react-router-dom';
import React from 'react';
import {
  ErrorBoundary,
  // IconExample,
  // NotificationExample,
  PopupExample,
  // TableExample,
  // AlertExample,
  ButtonExample,
  // MessageExample,
  SpinExample,
  IconExample,
  MessageExample,
  AlertExample,
  EmptyExample,
  AffixExample,
  SpaceExample,
  NotificationExample,
  AnchorExample,
  CheckboxExample,
  RadioExample,
  TooltipExample,
} from './routes';
import { Page404 } from '@/components/Status/404';
import {
  AFFIX_KEY,
  ALERT_KEY,
  ANCHOR_KEY,
  BUTTON_KEY,
  CHECKBOX_KEY,
  COMPONENTS_KEY,
  EMPTY_KEY,
  ICON_KEY,
  MESSAGE_KEY,
  NOTIFICATION_KEY,
  POPUP_KEY,
  RADIO_KEY,
  SPACE_KEY,
  SPIN_KEY,
  TOOLTIP_KEY,
} from '@/constants';
import AppLayout from '@/components/Layout/AppLayout';
import ComponentLayout from '@/components/Layout/ComponentLayout';

export const routerConfig = [
  {
    index: true,
    element: <Navigate to={`${COMPONENTS_KEY}/${BUTTON_KEY}`} />,
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: COMPONENTS_KEY,
        element: <ComponentLayout />,
        errorElement: <ErrorBoundary />,
        children: [
          { path: ALERT_KEY, element: <AlertExample /> },
          { path: ICON_KEY, element: <IconExample /> },
          { path: POPUP_KEY, element: <PopupExample /> },
          { path: SPIN_KEY, element: <SpinExample /> },
          { path: EMPTY_KEY, element: <EmptyExample /> },
          { path: SPACE_KEY, element: <SpaceExample /> },
          { path: BUTTON_KEY, element: <ButtonExample /> },
          { path: NOTIFICATION_KEY, element: <NotificationExample /> },
          { path: MESSAGE_KEY, element: <MessageExample /> },
          { path: ANCHOR_KEY, element: <AnchorExample /> },
          { path: AFFIX_KEY, element: <AffixExample /> },
          { path: CHECKBOX_KEY, element: <CheckboxExample /> },
          { path: RADIO_KEY, element: <RadioExample /> },
          { path: TOOLTIP_KEY, element: <TooltipExample /> },
          { path: '*', element: <Navigate to={BUTTON_KEY} replace /> },
        ],
      },
      { path: `${COMPONENTS_KEY}/`, element: <Navigate to={`${COMPONENTS_KEY}/${BUTTON_KEY}`} replace /> },
    ],
  },
  {
    path: '/*',
    element: <Page404 />,
    accessByMobile: true,
  },
];
