import { isObject } from './is';

/**
 * change css variable
 */
export function setCssVariables(variables: Record<string, any>, root = document.body) {
  if (variables && isObject(variables)) {
    Object.keys(variables).forEach((themKey) => {
      root.style.setProperty(themKey, variables[themKey]);
    });
  }
}
