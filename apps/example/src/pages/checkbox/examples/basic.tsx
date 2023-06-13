import { Basic } from '../locale';

const code = `
import { Space, Checkbox } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Checkbox>Checkbox</Checkbox>
      <Checkbox indeterminate>半选状态</Checkbox>
      <Checkbox indeterminate disabled>半选状态</Checkbox>
      <Checkbox disabled>Checkbox</Checkbox>
      <Checkbox checked disabled>Checkbox</Checkbox>
    </Space>
  );
};`;

export const basic = {
  code,
  namespace: Basic,
};
