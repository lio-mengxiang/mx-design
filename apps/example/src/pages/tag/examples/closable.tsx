import { Closable } from '../locale';

const code = `
import { Space, Tag } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical" size="24px">
      <div>
        <Tag type="fill" status="default" closable style={{ marginRight: '24px' }}>
          default tag
        </Tag>
        <Tag type="fill" status="brand" closable style={{ marginRight: '24px' }}>
          brand tag
        </Tag>
        <Tag type="fill" status="warning" closable style={{ marginRight: '24px' }}>
          warning tag
        </Tag>
        <Tag type="fill" status="error" closable style={{ marginRight: '24px' }}>
          error tag
        </Tag>
        <Tag type="fill" status="success" closable style={{ marginRight: '24px' }}>
          success tag
        </Tag>
      </div>

      <div size="24px">
        <Tag type="light" status="default" closable style={{ marginRight: '24px' }}>
          default tag
        </Tag>
        <Tag type="light" status="brand" closable style={{ marginRight: '24px' }}>
          brand tag
        </Tag>
        <Tag type="light" status="warning" closable style={{ marginRight: '24px' }}>
          warning tag
        </Tag>
        <Tag type="light" status="error" closable style={{ marginRight: '24px' }}>
          error tag
        </Tag>
        <Tag type="light" status="success" closable style={{ marginRight: '24px' }}>
          success tag
        </Tag>
      </div>

      <div size="24px">
        <Tag type="outline" status="default" closable style={{ marginRight: '24px' }}>
          default tag
        </Tag>
        <Tag type="outline" status="brand" closable style={{ marginRight: '24px' }}>
          brand tag
        </Tag>
        <Tag type="outline" status="warning" closable style={{ marginRight: '24px' }}>
          warning tag
        </Tag>
        <Tag type="outline" status="error" closable style={{ marginRight: '24px' }}>
          error tag
        </Tag>
        <Tag type="outline" status="success" closable style={{ marginRight: '24px' }}>
          success tag
        </Tag>
      </div>

      <div size="24px">
        <Tag type="light-outline" status="default" closable style={{ marginRight: '24px' }}>
          default tag
        </Tag>
        <Tag type="light-outline" status="brand" closable style={{ marginRight: '24px' }}>
          brand tag
        </Tag>
        <Tag type="light-outline" status="warning" closable style={{ marginRight: '24px' }}>
          warning tag
        </Tag>
        <Tag type="light-outline" status="error" closable style={{ marginRight: '24px' }}>
          error tag
        </Tag>
        <Tag type="light-outline" status="success" closable style={{ marginRight: '24px' }}>
          success tag
        </Tag>
      </div>      
    </Space>
  );
}`;

export const closable = {
  code,
  namespace: Closable,
};
