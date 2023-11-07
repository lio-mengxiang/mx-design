export function getProcessedData({ clonedData }) {
  if (!Array.isArray(clonedData)) return [];
  const _data = clonedData.slice();
  return _data;
}
