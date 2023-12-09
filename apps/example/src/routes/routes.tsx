import { load } from '../utils';

// layout
export const ErrorBoundary = load(() => import('@/components/ErrorBoundary'));

// components
export const AlertExample = load(() => import('@/pages/alert'));
export const ButtonExample = load(() => import('@/pages/button'));
export const IconExample = load(() => import('@/pages/icon'));
export const PopupExample = load(() => import('@/pages/popup'));
export const SpinExample = load(() => import('@/pages/spin'));
export const EmptyExample = load(() => import('@/pages/empty'));
export const NotificationExample = load(() => import('@/pages/notification'));
export const MessageExample = load(() => import('@/pages/message'));
export const SpaceExample = load(() => import('@/pages/space'));
export const AffixExample = load(() => import('@/pages/affix'));
export const AnchorExample = load(() => import('@/pages/anchor'));
export const CheckboxExample = load(() => import('@/pages/checkbox'));
export const RadioExample = load(() => import('@/pages/radio'));
export const TooltipExample = load(() => import('@/pages/tooltip'));
export const GridLayoutExample = load(() => import('@/pages/gridLayout'));
export const DropDownExample = load(() => import('@/pages/dropdown'));
export const ModalExample = load(() => import('@/pages/modal'));
export const DrawerExample = load(() => import('@/pages/drawer'));
export const TagExample = load(() => import('@/pages/tag'));
export const InputExample = load(() => import('@/pages/input'));
export const PaginationExample = load(() => import('@/pages/pagination'));
export const TableExample = load(() => import('@/pages/table'));
