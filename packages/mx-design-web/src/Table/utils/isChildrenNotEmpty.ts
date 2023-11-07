import { isChildrenNotEmpty } from './isDataHaveChildren';

export function isDataHaveChildren({ data, expandProps, childrenColumnName }) {
  return data.find((d) => isChildrenNotEmpty({ record: d, expandProps, childrenColumnName }));
}
