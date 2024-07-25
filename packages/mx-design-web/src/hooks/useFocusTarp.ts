// code from network
import { useEffect, RefObject, useRef } from 'react';

/* CONSTANTS */
const TABBABLE_ELEMENTS =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), area[href], form, audio[controls], video[controls], [tabindex="0"]';

const FIRST = 'fist';
const NONE = 'none';

// type
export type InitialFocus = typeof FIRST | typeof NONE | number;

export interface Options {
  /**
   * @zh 我们需要首次聚焦的 HTML 元素
   * @en HTML Element we should draw focus to first
   */
  initialFocus?: InitialFocus;
  /**
   * @zh 添加额外需要聚焦的元素
   * @en additional tabbable elements to be added
   */
  tabbableElements?: string;
}

/**
 * Adds focus trap effect to a given ref.
 */
export const useFocusTrap = <T extends HTMLElement>(
  ref: RefObject<T>,
  isActive: boolean, // isActive state of target pop up
  options: Options = {}
) => {
  const { initialFocus = NONE, tabbableElements = '' } = options;

  // last focused element before the focus trap was activated
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isActive) {
      const target = ref.current as T;

      // setting the last focused element
      lastFocusedElement.current = document.activeElement as HTMLElement;
      // blur the last focused element
      lastFocusedElement.current?.blur();

      // all focusable elements for the given target
      const focusableElements = target.querySelectorAll(TABBABLE_ELEMENTS + tabbableElements);
      // number of focusable elements on the target
      const numFocusableElements = focusableElements.length;

      // no focusable elements on the dialog box
      if (numFocusableElements === 0) return;

      // elements on the target
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[numFocusableElements - 1] as HTMLElement;

      // focus the first focusable element within the target
      if (initialFocus === FIRST) firstElement.focus();
      // focus the custom element on the target
      else if (typeof initialFocus === 'number') {
        if (initialFocus < 0) console.error(`initialFocus cannot be a negative number: you entered ${initialFocus}`);
        if (initialFocus >= numFocusableElements)
          console.error(
            `initialFocus cannot be greater than or equal to the total number of focusable elements within the target: you entered ${initialFocus}`
          );

        const elem = focusableElements[initialFocus] as HTMLElement;
        elem.focus();
      } else if (initialFocus === 'none') {
        /* empty */
      }
      // incorrect type specified of initialFocus
      else {
        console.error(
          `initialFocus must be either the values 'first', 'none', or a number. You specified initialFocus as ${typeof initialFocus}`
        );
      }

      const handleTab = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          // currently focused element within the document
          const focusedElement = document.activeElement as HTMLElement;

          const focusEvent = (elem: HTMLElement) => {
            elem.focus();
            return event.preventDefault();
          };

          // reaching the last focusable element going forward
          if (!event.shiftKey && focusedElement === lastElement) {
            focusEvent(firstElement);
          }
          // reaching the first focusable element going backwards
          if (event.shiftKey && focusedElement === firstElement) {
            focusEvent(lastElement);
          }
        }
      };

      target.addEventListener('keydown', handleTab);
      return () => {
        // on unmount, focus the last focused elem outside of the target
        lastFocusedElement.current!.focus();
        target.removeEventListener('keydown', handleTab);
      };
    }
  }, [isActive]);
};
