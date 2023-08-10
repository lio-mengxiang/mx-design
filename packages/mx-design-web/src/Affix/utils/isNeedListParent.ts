import { getNodeName } from '../../Popper-js/utils/getNodeName';
import { isHTMLElement } from '../../Popper-js/utils/isHTMLElement';

export function isNeedListParent({ isInScrollContainer, scrollContainer }) {
  return (
    isInScrollContainer &&
    isHTMLElement(scrollContainer.current) &&
    ['html', 'body', '#document'].indexOf(getNodeName(scrollContainer.current)) <= 0
  );
}
