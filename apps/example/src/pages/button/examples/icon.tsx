import { Icon } from '../locale';

const code = `
import { Space, Button, IconAdd, IconAshbin } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button type="brand" icon={<IconAdd />} />
      <Button type="brand" icon={<IconAshbin />}>
        Delete
      </Button>
    </Space>
  )
}`;

export const icon = {
  code,
  namespace: Icon,
};
