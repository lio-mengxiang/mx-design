export function isLengthExceeds({ mergedMaxLength, valueLength, trueMaxLength }) {
  if (!mergedMaxLength && trueMaxLength) {
    return valueLength > trueMaxLength;
  }
  return false;
}
