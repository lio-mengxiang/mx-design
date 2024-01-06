export function contains(root: HTMLElement, ele) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(ele);
  }
  let node = ele;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
