import { Text } from '../locale';

const code = `
import { Space, Switch } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Switch checkedElement="ON" unCheckedElement="OFF" />
      <Switch checkedElement="YES" unCheckedElement="NO" />
    </Space>
  );
}`;

export const text = {
  code,
  namespace: Text,
};
