export function getPaddingLeft({ hasInlineExpandIcon, level, indentSize, recordHaveChildren }) {
  let paddingLeft = hasInlineExpandIcon && level > 0 ? indentSize * level : 0;

  if (hasInlineExpandIcon && !recordHaveChildren) {
    // expand icon width and margin-right
    paddingLeft += 16 + 4;
  }

  return paddingLeft;
}
