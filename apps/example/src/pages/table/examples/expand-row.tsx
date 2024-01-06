import { ExpandRow } from '../locale';

const code = `
import { Table } from '@mx-design/web';

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 174,
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      width: 100,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '40%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '60%',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '7',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
  ];
  const [type, setType] = React.useState('checkbox');
  const [selectedRowKeys, setSelectedRowKeys] = React.useState(['4']);

  return (
    <Table
      columns={columns}
      data={data}
      expandedRowRender={(record) => {
        return \`This is No.\${record.key} description.\`;
      }}
      onExpand={(detail, expanded) => {
        console.log(detail, expanded);
      }}
      onExpandedRowsChange={(expandedRows) => {
        console.log(expandedRows);
      }}
      expandProps={{
        expandRowByClick: true,
        rowExpandable: (record) => record.key !== '4',
      }}
    />
  );
}`;

export const expandRow = {
  code,
  namespace: ExpandRow,
};
