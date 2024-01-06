export function getAllPages(pageSize, total) {
  const pageNum = Math.ceil(total / pageSize);
  return Math.max(pageNum, 0);
}
