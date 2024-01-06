import type { DrawerProps } from '../interface';

let count = 1;
export function getId(noticeProps: DrawerProps) {
  if (noticeProps.id) {
    return noticeProps.id;
  }
  count += 1;
  return count;
}
