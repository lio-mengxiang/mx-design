import React, { Key, useMemo } from 'react';
import { isArray, isObject } from '@mx-design/web-utils';
import { getSelectedKeysByData, getAllSelectedRowKeys, getSelectedKeys, deleteUnExistKeys, getOriginData } from '../utils';
import { RADIO } from '../constants';
// type
import type { INewRecord, RowSelectionProps, TableProps } from '../interface';

export function useRowSelection<T>({
  rowSelection,
  childrenColumnName,
  pageData,
  clonedDataKeysMap,
  selectedRowKeys,
  setSelectedRowKeys,
  indeterminateKeys,
  setIndeterminateKeys,
}: {
  rowSelection: RowSelectionProps<T>;
  childrenColumnName: TableProps['childrenColumnName'];
  pageData: INewRecord<T>[];
  clonedDataKeysMap: Map<string | number, INewRecord<T>>;
  selectedRowKeys: Set<React.Key>;
  setSelectedRowKeys: React.Dispatch<React.SetStateAction<Set<Key>>>;
  indeterminateKeys: Set<React.Key>;
  setIndeterminateKeys: React.Dispatch<React.SetStateAction<Set<Key>>>;
}) {
  const onSelectAll = rowSelection?.onSelectAll;
  const onSelect = rowSelection?.onSelect;
  const onChange = rowSelection?.onChange;

  const isControlledIndeterminateKeys = isArray(rowSelection?.indeterminateKeys);
  const isControlledSelectedRowKeys = isArray(rowSelection?.selectedRowKeys);
  // checkConnected mean if parent record is associated with child record
  const checkConnected = typeof rowSelection?.checkStrictly === 'boolean' ? !rowSelection.checkStrictly : false;
  const preserveSelectedRowKeys = rowSelection?.preserveSelectedRowKeys;

  const allSelectedRowSetKeys = useMemo<Set<Key>>(() => {
    return isObject(rowSelection) && rowSelection.type !== RADIO
      ? getAllSelectedRowKeys<T>({ rowSelection, childrenColumnName, pageData })
      : new Set();
  }, [childrenColumnName, pageData, rowSelection]);

  const [mergedSelectedRowSetKeys, mergedIndeterminateSetKeys] = getSelectedKeysByData<T>({
    clonedDataKeysMap,
    checkedKeys: selectedRowKeys,
    childrenColumnName,
    checkConnected,
    indeterminateKeys,
    isControlledIndeterminateKeys,
    isControlledSelectedRowKeys,
  });

  function onCheckAll(checked: boolean) {
    let newSelectedRowKeys = new Set<React.Key>();

    if (checked) {
      newSelectedRowKeys = new Set([...mergedSelectedRowSetKeys, ...allSelectedRowSetKeys]);
    } else {
      mergedSelectedRowSetKeys.forEach((key) => {
        if (!allSelectedRowSetKeys.has(key)) {
          newSelectedRowKeys.add(key);
        }
      });
    }
    setSelectedRowKeys(
      new Set(
        deleteUnExistKeys({
          preserveSelectedRowKeys,
          selectedRowKeys: newSelectedRowKeys,
          currentPageKeys: allSelectedRowSetKeys,
        })
      )
    );
    setIndeterminateKeys(new Set());
    const newSelectedRowKeysArray = [...newSelectedRowKeys];
    const newSelectedRows = newSelectedRowKeysArray.filter((a) => a).map((key) => clonedDataKeysMap.get(key).__ORIGIN_DATA);
    onSelectAll?.(checked, newSelectedRows);
    onChange?.(newSelectedRowKeysArray, newSelectedRows);
  }

  function onCheck(checked: boolean, record: INewRecord<T>) {
    const { selectedRowKeys, indeterminateKeys: _indeterminateKeys } = getSelectedKeys(
      record,
      checked,
      mergedSelectedRowSetKeys,
      mergedIndeterminateSetKeys,
      childrenColumnName,
      checkConnected
    );

    const newSelectedRowKeys = deleteUnExistKeys({ preserveSelectedRowKeys, selectedRowKeys, currentPageKeys: allSelectedRowSetKeys });

    setSelectedRowKeys(newSelectedRowKeys);
    setIndeterminateKeys(_indeterminateKeys);
    const newSelectedRowKeysArray = [...newSelectedRowKeys];
    const newSelectedRows = newSelectedRowKeysArray.filter((a) => a).map((key) => clonedDataKeysMap.get(key).__ORIGIN_DATA);

    onSelect?.(checked, getOriginData(record), newSelectedRows);
    onChange?.(newSelectedRowKeysArray, newSelectedRows);
  }

  function onCheckRadio(key, record: INewRecord<T>) {
    setSelectedRowKeys(new Set(key));
    const newSelectedRowKeysArray = [key];
    const newSelectedRows = newSelectedRowKeysArray.filter((a) => a).map((key) => clonedDataKeysMap.get(key).__ORIGIN_DATA);
    onSelect?.(true, getOriginData(record), newSelectedRows);
    onChange?.(newSelectedRowKeysArray, newSelectedRows);
  }

  return {
    selectedRowSetKeys: mergedSelectedRowSetKeys,
    indeterminateSetKeys: mergedIndeterminateSetKeys,
    onCheckAll,
    onCheck,
    onCheckRadio,
    allSelectedRowSetKeys,
  };
}
