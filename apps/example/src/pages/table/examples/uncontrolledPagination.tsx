import { UncontrolledPagination } from '../locale';

const code = `
import { Table, TableColumnProps } from '@mx-design/web';

const data = Array(60)
  .fill('')
  .map((_, index) => ({
    key: \`\${index}\`,
    name: \`Kevin \${index}\`,
    salary: 22000,
    address: \`\${index} Park Road, London\`,
    email: \`kevin.sandra_\${index}@example.com\`,
  }));

const miniBtnStyle = { fontSize: '12px', padding: '0 11px', height: '24px' };

function App() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 174,
      filterDropdown: ({ value, setFilterValue, close }) => {
        const [state, setState] = React.useState(value || '');

        return (
          <div style={{ padding: '12px 16px' }}>
            <Space direction="vertical" size="16px">
              <Input.Search
                allowClear
                value={state}
                placeholder="Search name"
                onChange={(value) => {
                  setState(value);
                }}
              />
              <Space>
                <Button
                  type="brand"
                  onClick={() => {
                    setFilterValue(state);
                    close();
                  }}
                  themeStyle={miniBtnStyle}
                >
                  Confirm
                </Button>
                <Button
                  type="outline"
                  status="default"
                  onClick={() => {
                    close();
                  }}
                  themeStyle={miniBtnStyle}
                >
                  Cancel
                </Button>
              </Space>
            </Space>
          </div>
        );
      },
      onFilter: (value, row) => (value ? row.name.indexOf(value) !== -1 : true),
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      width: 100
    },
    {
      title: 'Address',
      dataIndex: 'address',
      width: '40%'
    },
    {
      title: 'Email',
      dataIndex: 'email',
       width: '60%'
    },
  ];


  return <Table columns={columns} data={data} pagination={{ pageSize: 5  }} />;
}`;

export const uncontrolledPagination = {
  code,
  namespace: UncontrolledPagination,
};
