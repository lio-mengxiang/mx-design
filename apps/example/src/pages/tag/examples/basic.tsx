import { Basic } from '../locale';

const code = `
import { Space, Tag } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical" size="24px">
      <Space size="24px">
        <Tag type="fill" status="default">
          default tag
        </Tag>
        <Tag type="fill" status="brand">
          brand tag
        </Tag>
        <Tag type="fill" status="warning">
          warning tag
        </Tag>
        <Tag type="fill" status="error">
          error tag
        </Tag>
        <Tag type="fill" status="success">
          success tag
        </Tag>
      </Space>

      <Space size="24px">
        <Tag type="light" status="default">
          default tag
        </Tag>
        <Tag type="light" status="brand">
          brand tag
        </Tag>
        <Tag type="light" status="warning">
          warning tag
        </Tag>
        <Tag type="light" status="error">
          error tag
        </Tag>
        <Tag type="light" status="success">
          success tag
        </Tag>
      </Space>

      <Space size="24px">
        <Tag type="outline" status="default">
          default tag
        </Tag>
        <Tag type="outline" status="brand">
          brand tag
        </Tag>
        <Tag type="outline" status="warning">
          warning tag
        </Tag>
        <Tag type="outline" status="error">
          error tag
        </Tag>
        <Tag type="outline" status="success">
          success tag
        </Tag>
      </Space>

      <Space size="24px">
        <Tag type="light-outline" status="default">
          default tag
        </Tag>
        <Tag type="light-outline" status="brand">
          brand tag
        </Tag>
        <Tag type="light-outline" status="warning">
          warning tag
        </Tag>
        <Tag type="light-outline" status="error">
          error tag
        </Tag>
        <Tag type="light-outline" status="success">
          success tag
        </Tag>
      </Space>      
    </Space>
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
