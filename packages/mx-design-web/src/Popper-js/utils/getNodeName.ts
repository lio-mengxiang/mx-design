export function getNodeName(element: Node): string {
  return (element?.nodeName || '').toLowerCase();
}
