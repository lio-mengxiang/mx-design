import { Shape } from '../locale';

const code = `
import { Space, Tag } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Tag>label 1</Tag>
      <Tag type="light" status="brand" themeStyle={{ '--tag-border-radius': '16px' }}>
        label 2
      </Tag>
      <Tag type="outline" status="success" themeStyle={{ '--tag-border-radius': '0 16px 16px 0' }}>label 3</Tag>
    </Space>
  );
}`;

export const shape = {
  code,
  namespace: Shape,
};
