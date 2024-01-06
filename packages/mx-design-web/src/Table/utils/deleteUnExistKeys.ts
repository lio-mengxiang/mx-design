import { Key } from 'react';

export function deleteUnExistKeys({
  preserveSelectedRowKeys,
  selectedRowKeys,
  currentPageKeys,
}: {
  preserveSelectedRowKeys: boolean;
  selectedRowKeys: Set<Key>;
  currentPageKeys: Set<Key>;
}) {
  return preserveSelectedRowKeys ? selectedRowKeys : filterSelectedRowKeys(selectedRowKeys, currentPageKeys);
}

function filterSelectedRowKeys(selectedRowKeys: Set<Key>, currentPageKeys: Set<Key>) {
  const result = new Set<Key>();
  for (const key of selectedRowKeys) {
    if (currentPageKeys.has(key)) {
      result.add(key);
    }
  }
  return result;
}
