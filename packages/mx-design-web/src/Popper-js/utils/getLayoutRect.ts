import { getBoundingClientRect } from './getBoundingClientRect';

export default function getLayoutRect(element) {
  const clientRect = getBoundingClientRect(element);

  let width = element.offsetWidth;
  let height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height,
  };
}
