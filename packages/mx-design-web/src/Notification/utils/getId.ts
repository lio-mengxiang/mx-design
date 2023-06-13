import { NotificationProps } from '../interface';

let count = 1;
export function getId(noticeProps: NotificationProps) {
  if (noticeProps.id) {
    return noticeProps.id;
  }
  count += 1;
  return count;
}
