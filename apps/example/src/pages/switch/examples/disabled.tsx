import { Disabled } from '../locale';

const code = `
import { Space, Switch } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Switch disabled />
      <Switch checked disabled />
    </Space>
  );
}`;

export const disabled = {
  code,
  namespace: Disabled,
};
