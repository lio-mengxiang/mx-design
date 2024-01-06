import { resetTableClassName } from './resetTableClassName';

export function setFixedColumnsClassList(classList, className, prefixCls) {
  if (!classList.contains(className)) {
    resetTableClassName(classList, prefixCls);
    classList.add(className);
  }
}
