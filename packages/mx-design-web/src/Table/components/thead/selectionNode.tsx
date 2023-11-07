import React from 'react';
import { Checkbox } from '../../../Checkbox';
import { DEFAULT_CHECKBOX_SIZE } from '../../constants';

export function SelectionNode({ operationClassName, prefixCls, isRadio, isCheckAll, rowSelection, ...rest }) {
  return (
    <th {...rest}>
      <div className={`${prefixCls}-th-item`}>
        {isCheckAll && !isRadio ? (
          <Checkbox
            // indeterminate={data && currentSelectedRowKeys.length > 0 && currentSelectedRowKeys.length !== allSelectedRowKeys.length}
            // checked={data && currentSelectedRowKeys.length !== 0 && currentSelectedRowKeys.length === allSelectedRowKeys.length}
            // disabled={!allSelectedRowKeys.length}
            // onChange={props.onCheckAll}
            themeStyle={DEFAULT_CHECKBOX_SIZE}
          />
        ) : null}
        {rowSelection && rowSelection.columnTitle}
      </div>
    </th>
  );
}
