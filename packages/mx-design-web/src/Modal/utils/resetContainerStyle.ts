export const resetContainerStyle = ({ needResetContainerStyle, getContainer, originContainerStyle }) => {
  if (needResetContainerStyle.current && getContainer()) {
    const container = getContainer();
    const originStyle = originContainerStyle.current;
    // eslint-disable-next-line no-return-assign
    Object.keys(originStyle).forEach((i) => (container.style[i] = originStyle[i]));
  }
  needResetContainerStyle.current = false;
  originContainerStyle.current = {};
};
