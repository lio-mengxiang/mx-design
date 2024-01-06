import { Close } from '../locale';

const code = `
import { useMessage, Button, Space } from '@mx-design/web';

function App() {
  const Message = useMessage();
  return (
    <Space>
      <Button
        onClick={() => {
          Message.add({
            id: 'aa',
            type: 'info',
            content: 'This is an info message!',
          });
        }}
      >
        Open Message
      </Button>
      <Button
        status="default"
        onClick={() => {
          Message.remove('aa');
        }}
      >
        Close Message
      </Button>
    </Space>
  );
}`;

export const close = {
  code,
  namespace: Close,
};
