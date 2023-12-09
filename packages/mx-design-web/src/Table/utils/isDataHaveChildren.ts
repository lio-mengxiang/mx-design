import { isChildrenNotEmpty } from './isChildrenNotEmpty';

export function isDataHaveChildren({ data, childrenColumnName }) {
  return data.find((d) => isChildrenNotEmpty({ record: d, childrenColumnName }));
}
