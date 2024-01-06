export function getBufferSize(bufferSize, allPages) {
  const min = 0;
  const max = Math.floor(allPages / 2) - 1;
  return Math.min(Math.max(bufferSize, min), max);
}
