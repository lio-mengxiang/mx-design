import { isArray } from '@mx-design/web-utils';
import { isChildrenNotEmpty } from './isChildrenNotEmpty';

export function getFlattenData({ childrenColumnName, checkConnected, data }) {
  const flattenData = new Map();
  // get all record
  const travelOrigin = (children, parent) => {
    if (isArray(children) && children.length) {
      children.forEach((record) => {
        if (parent && checkConnected) {
          record.__INTERNAL_PARENT = parent;
        }
        flattenData.set(record.$$key, record);
        if (isChildrenNotEmpty({ record, childrenColumnName })) {
          const _parent = { ...record };
          travelOrigin(record[childrenColumnName], _parent);
        }
      });
    }
  };
  travelOrigin(data, undefined);

  return flattenData;
}
