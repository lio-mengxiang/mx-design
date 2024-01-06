import React, { Key } from 'react';
import { Checkbox } from '../../../Checkbox';
import { Radio } from '../../../Radio';
import { DEFAULT_CHECKBOX_SIZE, CHECKBOX, RADIO, DEFAULT_RADIO_SIZE } from '../../constants';
import type { INewRecord, TableProps } from '../../interface';

export function SelectionNode<T>({
  record,
  rowK,
  type,
  ComponentTd,
  rowSelection,
  originRecord,
  checkboxProps,
  checked,
  indeterminate,
  onCheck,
  onCheckRadio,
  outerClassName,
  ...rest
}: {
  record: INewRecord<T>;
  rowK: Key;
  type: 'checkbox' | 'radio';
  ComponentTd: any;
  rowSelection: TableProps['rowSelection'];
  originRecord: T;
  checkboxProps: {
    [key: string]: any;
  };
  checked: boolean;
  indeterminate: boolean;
  onCheck: (checked: boolean, record: INewRecord<T>) => void;
  onCheckRadio: (key: any, record: INewRecord<T>) => void;
  outerClassName: string;
}) {
  let selectionNode;
  const renderSelectionCell = rowSelection?.renderCell;

  const checkboxNode = (
    <Checkbox
      value={rowK}
      themeStyle={DEFAULT_CHECKBOX_SIZE}
      onChange={(check) => onCheck(check, record)}
      checked={checked}
      indeterminate={indeterminate}
      {...checkboxProps}
    />
  );

  const radioNode = (
    <Radio onChange={() => onCheckRadio(rowK, record)} value={rowK} themeStyle={DEFAULT_RADIO_SIZE} checked={checked} {...checkboxProps} />
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
