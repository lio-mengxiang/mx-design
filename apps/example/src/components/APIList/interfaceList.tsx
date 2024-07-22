import React from 'react';
import { Table } from '@mx-design/web';
import useCreation from '@mx-design/hooks/src/useCreation';
import { useLocale } from '@/locale/useLocal/useLocal';
import { NAME_SPACE_API_LIST } from './locale';

export function InterfaceList(props) {
  const { list = [] } = props;
  const [local] = useLocale<typeof NAME_SPACE_API_LIST>({ namespace: NAME_SPACE_API_LIST });

  const tableColumns = useCreation(() => {
    return [
      {
        title: local.PROPERTY,
        dataIndex: 'name',
        width: '20%',
      },
      {
        title: local.DESCRIPTION,
        dataIndex: 'salary',
        width: '60%',
      },
      {
        title: local.DEFAULT,
        dataIndex: 'address',
        width: '10%',
      },
      {
        title: local.IS_OPTIONAL,
        dataIndex: 'email',
        width: '10%%',
      },
    ];
  }, []);

  return <Table columns={tableColumns} data={list} pagination={false} />;
}
