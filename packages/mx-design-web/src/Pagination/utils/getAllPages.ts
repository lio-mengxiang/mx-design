export function getAllPages(pageSize, total) {
  return Math.ceil(total / pageSize);
}
