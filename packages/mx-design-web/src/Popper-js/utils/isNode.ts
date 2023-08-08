export function isNode(value: any): value is Node {
  return value instanceof window.Node;
}
