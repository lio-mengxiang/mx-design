import { Basic } from '../locale';

const code = `
import { Space, Radio } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Radio>Radio</Radio>
      <Radio checked>Radio</Radio>
      <Radio checked disabled>
        Disabled Radio
      </Radio>
      <Radio disabled>
        Disabled Radio
      </Radio>
    </Space>
  );
};`;

export const basic = {
  code,
  namespace: Basic,
};
