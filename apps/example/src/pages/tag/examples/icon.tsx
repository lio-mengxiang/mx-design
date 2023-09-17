import { Icon } from '../locale';

const code = `
import { Space, Tag, IconArrowRight } from '@mx-design/web';

function App() {
  return (
    <Space direction="vertical" size="24px">
      <Space size="24px">
        <Tag type="fill" status="default" icon={<IconArrowRight />}>
          default tag
        </Tag>
        <Tag type="fill" status="brand" icon={<IconArrowRight />}>
          brand tag
        </Tag>
        <Tag type="fill" status="warning" icon={<IconArrowRight />}>
          warning tag
        </Tag>
        <Tag type="fill" status="error" icon={<IconArrowRight />}>
          error tag
        </Tag>
        <Tag type="fill" status="success" icon={<IconArrowRight />}>
          success tag
        </Tag>
      </Space>

      <Space size="24px">
        <Tag type="light" status="default" icon={<IconArrowRight />}>
          default tag
        </Tag>
        <Tag type="light" status="brand" icon={<IconArrowRight />}>
          brand tag
        </Tag>
        <Tag type="light" status="warning" icon={<IconArrowRight />}>
          warning tag
        </Tag>
        <Tag type="light" status="error" icon={<IconArrowRight />}>
          error tag
        </Tag>
        <Tag type="light" status="success" icon={<IconArrowRight />}>
          success tag
        </Tag>
      </Space>

      <Space size="24px">
        <Tag type="outline" status="default" icon={<IconArrowRight />}>
          default tag
        </Tag>
        <Tag type="outline" status="brand" icon={<IconArrowRight />}>
          brand tag
        </Tag>
        <Tag type="outline" status="warning" icon={<IconArrowRight />}>
          warning tag
        </Tag>
        <Tag type="outline" status="error" icon={<IconArrowRight />}>
          error tag
        </Tag>
        <Tag type="outline" status="success" icon={<IconArrowRight />}>
          success tag
        </Tag>
      </Space>

      <Space size="24px">
        <Tag type="light-outline" status="default" icon={<IconArrowRight />}>
          default tag
        </Tag>
        <Tag type="light-outline" status="brand" icon={<IconArrowRight />}>
          brand tag
        </Tag>
        <Tag type="light-outline" status="warning" icon={<IconArrowRight />}>
          warning tag
        </Tag>
        <Tag type="light-outline" status="error" icon={<IconArrowRight />}>
          error tag
        </Tag>
        <Tag type="light-outline" status="success" icon={<IconArrowRight />}>
          success tag
        </Tag>
      </Space>      
    </Space>
  );
}`;

export const icon = {
  code,
  namespace: Icon,
};
