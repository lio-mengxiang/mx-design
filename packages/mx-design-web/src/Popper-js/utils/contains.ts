export function contains(parent: Element, child: Element) {
  if (parent.contains(child)) {
    return true;
  }

  return false;
}
