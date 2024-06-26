import { Status } from '../locale';

const code = `
import { Space, Button } from '@mx-design/web';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
      }}
    >
      <Space direction="vertical" size={16}>
        <Button type="brand">Brand</Button>
        <Button type="outline">Brand</Button>
        <Button type="text">Brand</Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" status="warning">
          Warning
        </Button>
        <Button type="outline" status="warning">
          Warning
        </Button>
        <Button type="text" status="warning">
          Warning
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" status="error">
          Error
        </Button>
        <Button type="outline" status="error">
          Error
        </Button>
        <Button type="text" status="error">
          Error
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" status="success">
          Success
        </Button>
        <Button type="outline" status="success">
          Success
        </Button>
        <Button type="text" status="success">
          Success
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" status="default">
          Default
        </Button>
        <Button type="outline" status="default">
          Default
        </Button>
        <Button type="text" status="default">
          Default
        </Button>
      </Space>
    </div>
  );
}`;

export const status = {
  code,
  namespace: Status,
};
