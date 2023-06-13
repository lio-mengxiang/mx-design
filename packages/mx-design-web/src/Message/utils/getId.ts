import { MessageProps } from '../interface';

let count = 1;
export function getId(noticeProps: MessageProps) {
  if (noticeProps.id) {
    return noticeProps.id;
  }
  count += 1;
  return count;
}
