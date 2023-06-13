interface IFixedPlaceholderStatus {
  affixWrapDom: HTMLDivElement;
  placeholderDom: HTMLElement;
  wrapWidth: number;
  wrapHeight: number;
}

export const fixedPlaceholder = ({ placeholderDom, affixWrapDom, wrapWidth, wrapHeight }: IFixedPlaceholderStatus) => {
  placeholderDom.style.width = `${wrapWidth}px`;
  placeholderDom.style.height = `${wrapHeight}px`;
  affixWrapDom.appendChild(placeholderDom);
};
