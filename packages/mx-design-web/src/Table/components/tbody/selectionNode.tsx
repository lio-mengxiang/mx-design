import React from 'react';
import { Checkbox } from '../../../Checkbox';
import { Radio } from '../../../Radio';
import { DEFAULT_CHECKBOX_SIZE, CHECKBOX, RADIO, DEFAULT_RADIO_SIZE } from '../../constants';

export function SelectionNode({
  record,
  rowK,
  type,
  ComponentTd,
  getPrefixColClassName,
  rowSelection,
  checked,
  originRecord,
  checkboxProps,
  ...rest
}) {
  let selectionNode;
  const renderSelectionCell = rowSelection?.renderCell;

  const checkboxNode = (
    <Checkbox
      value={rowK}
      themeStyle={DEFAULT_CHECKBOX_SIZE}
      // onChange={(check) => onCheck(check, record)}
      // checked={checked}
      // indeterminate={indeterminate}
      {...checkboxProps}
    />
  );

  const radioNode = (
    <Radio
      // onChange={() => onCheckRadio(rowK, record)}
      value={rowK}
      themeStyle={DEFAULT_RADIO_SIZE}
      // checked={checked}
      {...checkboxProps}
    />
  );

  if (type === CHECKBOX) {
    selectionNode = (
      <ComponentTd {...rest}>{renderSelectionCell ? renderSelectionCell(checkboxNode, checked, originRecord) : checkboxNode}</ComponentTd>
    );
  }
  if (type === RADIO) {
    selectionNode = (
      <ComponentTd {...rest}>{renderSelectionCell ? renderSelectionCell(radioNode, checked, originRecord) : radioNode}</ComponentTd>
    );
  }
  return selectionNode;
}
