import { getScrollBarWidth } from './getScrollBarWidth';

/**
 * Hides the container's scroll bar
 */
export const setContainerStyle = ({ getContainer, needResetContainerStyle, originContainerStyle }) => {
  const container = getContainer();
  if (container && container.style.overflow !== 'hidden') {
    /**
     * @zh 记录container的style属性, 因为后续要将container.style.overflow设为hidden
     * @en Record the container's style property, because I'll set container.style.overflow to hidden later
     */
    const originStyle = container.style;

    /**
     * @zh 记录是否 container.style.overflow 被覆盖为hidden
     * @en Note whether container.style.overflow is overwritten as hidden
     */
    needResetContainerStyle.current = true;

    const containerScrollBarWidth = getScrollBarWidth(container);
    if (containerScrollBarWidth) {
      originContainerStyle.current.width = originStyle.width;
      container.style.width = `calc(${container.style.width || '100%'} - ${containerScrollBarWidth}px)`;
    }

    /**
     * @zh 设置container的overflow为hidden
     * @en Set container overflow to hidden
     */
    originContainerStyle.current.overflow = originStyle.overflow;
    container.style.overflow = 'hidden';
  }
};
