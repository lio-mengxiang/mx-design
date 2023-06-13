import { Basic } from '../locale';

const code = `
import { Space, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button type="brand">Brand</Button>
      <Button type="outline">Outline</Button>
      <Button type="text">Text</Button>
    </Space>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
