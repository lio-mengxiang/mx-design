import { Disabled } from '../locale';

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
        <Button type="brand" disabled>
          Brand
        </Button>
        <Button type="outline" disabled>
          Brand
        </Button>
        <Button type="text" disabled>
          Brand
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" status="warning" disabled>
          Warning
        </Button>
        <Button type="outline" status="warning" disabled>
          Warning
        </Button>
        <Button type="text" status="warning" disabled>
          Warning
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" status="error" disabled>
          Error
        </Button>
        <Button type="outline" status="error" disabled>
          Error
        </Button>
        <Button type="text" status="error" disabled>
          Error
        </Button>
      </Space>

      <Space direction="vertical" size={16}>
        <Button type="brand" status="success" disabled>
          Success
        </Button>
        <Button type="outline" status="success" disabled>
          Success
        </Button>
        <Button type="text" status="success" disabled>
          Success
        </Button>
      </Space>
      <Space direction="vertical" size={16}>
        <Button type="brand" status="default" disabled>
          Default
        </Button>
        <Button type="outline" status="default" disabled>
          Default
        </Button>
        <Button type="text" status="default" disabled>
          Default
        </Button>
      </Space>
    </div>
  );
}`;

export const disabled = {
  code,
  namespace: Disabled,
};
