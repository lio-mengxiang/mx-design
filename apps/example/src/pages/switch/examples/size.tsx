import { Size } from '../locale';

const code = `
import { Space, Switch } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Switch />
      <Switch themeStyle={{ '--switch-size': '12px', '--switch-size-dot': '8px', '--switch-top': '2px' }} />
    </Space>
  );
}`;

export const size = {
  code,
  namespace: Size,
};
