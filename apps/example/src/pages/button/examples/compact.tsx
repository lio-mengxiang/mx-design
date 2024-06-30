import { Compact } from '../locale';

const code = `
import { Space, Button, Table } from '@mx-design/web';

function App() {
  const columns = (compact) => [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },

    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: () => (
        <Button type="text" compact={compact}>
          Edit
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Jane Doe',
      age: 23,
      address: '32 Park Road, London',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      age: 24,
      address: '42 Park Road, London',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      age: 25,
      address: '52 Park Road, London',
    },
  ];
  return (
    <Space direction="vertical">
      <Table columns={columns(true)} data={data} />
    </Space>
  );
}

`;

export const compact = {
  code,
  namespace: Compact,
};
