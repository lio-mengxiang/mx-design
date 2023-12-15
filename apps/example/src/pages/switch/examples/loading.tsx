import { Loading } from '../locale';

const code = `
import { Space, Switch } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Switch loading />
      <Switch checked loading />
      <Switch loading disabled />
      <Switch checked loading disabled />
      <Switch checkedElement="ON" unCheckedElement="OFF" loading />
    </Space>
  );
}`;

export const loading = {
  code,
  namespace: Loading,
};
