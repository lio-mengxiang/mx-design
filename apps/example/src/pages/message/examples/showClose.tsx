import { ShowClose } from '../locale';

const code = `
import { MessageStore, Button } from '@mx-design/web';

function App() {
  return (
    <Button
      onClick={() => {
        MessageStore.add({
          type: 'info',
          closable: true,
          showIcon: false,
          content: 'This is an info message!'
        });
      }}
    >
      Open Message
    </Button>
  );
};`;

export const showClose = {
  code,
  namespace: ShowClose,
};
