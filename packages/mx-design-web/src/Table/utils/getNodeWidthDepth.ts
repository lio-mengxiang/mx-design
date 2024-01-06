/**
 * @zh 获取当前节点的叶子结点宽度
 * @en get the leaf width of the current node
 */
export function getNodeWidthDepth(node: any) {
  let widthRange = 0;

  function dfs(node: any) {
    const childrenList = node?.children || [];
    for (let i = 0, len = childrenList.length; i < len; i++) {
      const item = childrenList[i];
      if (item?.children) {
        dfs(item);
      } else {
        widthRange += 1;
      }
    }
  }

  dfs(node);
  return widthRange;
}
