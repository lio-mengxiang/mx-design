import { Custom } from '../locale';

const code = `
import { useMessage, Space, Button, IconSmile, IconSun } from '@mx-design/web';

function App() {
  const Message = useMessage();
  return (
    <Space>
      <Button
        onClick={() => {
          Message.add({
            type: 'info',
            icon: <IconSmile />,
            content: 'This is an info message!',
          });
        }}
      >
        Info Message
      </Button>
      <Button
        onClick={() => {
          Message.add({
            type: 'warning',
            icon: <IconStop />,
            content: 'This is an warning message!',
          });
        }}
        status="warning"
      >
        Warning Message
      </Button>
      <Button
        onClick={() => {
          Message.add({
            type: 'success',
            icon: <IconSun />,
            content: 'This is an success message!',
          });
        }}
        status="success"
      >
        Success Message
      </Button>
    </Space>
  );
};`;

export const custom = {
  code,
  namespace: Custom,
};
