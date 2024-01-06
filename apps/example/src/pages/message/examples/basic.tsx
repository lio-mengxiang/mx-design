import { Basic } from '../locale';

const code = `
import { useMessage, Button } from '@mx-design/web';

function App() {
  const Message = useMessage();
  return (
    <Button
      onClick={() => {
        Message.add({
          type: 'info',
          content: 'This is an info message!'
        });
      }}
    >
      Open Message
    </Button>
  );
};`;

export const basic = {
  code,
  namespace: Basic,
};
