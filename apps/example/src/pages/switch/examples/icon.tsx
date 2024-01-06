import { Icon } from '../locale';

const code = `
import { Space, Switch } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Switch checkedIcon={<IconSun />} uncheckedIcon={<IconMoon />} />
      <Switch checkedElement={<IconSelect />} unCheckedElement={<IconClose />} />
    </Space>
  );
}`;

export const icon = {
  code,
  namespace: Icon,
};
