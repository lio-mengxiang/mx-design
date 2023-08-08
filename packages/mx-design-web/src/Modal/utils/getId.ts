import type { ModalProps } from '../interface';

let count = 1;
export function getId(noticeProps: ModalProps) {
  if (noticeProps.id) {
    return noticeProps.id;
  }
  count += 1;
  return count;
}
