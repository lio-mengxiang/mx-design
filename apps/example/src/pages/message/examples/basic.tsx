import { Basic } from '../locale';

const code = `
import { MessageStore, Button } from '@mx-design/web';

function App() {
  return (
    <Button
      onClick={() => {
        MessageStore.add({
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
