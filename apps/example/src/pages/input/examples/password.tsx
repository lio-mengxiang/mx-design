import { Password } from '../locale';

const code = `
import { Space, Input } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Input.Password defaultValue="password" style={{ width: 350 }} />
      <Input.Password defaultValue="password" defaultVisibility placeholder="Please enter ..." style={{ width: 350 }} />
    </Space>
  );
}`;

export const password = {
  code,
  namespace: Password,
};
