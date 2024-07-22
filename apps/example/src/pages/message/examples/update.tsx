import { Update } from '../locale';

const code = `
import { MessageStore, Button } from '@mx-design/web';

function App() {

  function updateMessage() {
    const id = MessageStore.add({
      type: 'loading',
      content: 'Will update after 1 seconds...',
      duration: null,
    });
    setTimeout(() => {
      MessageStore.update(id, {
        type: 'success',
        content: 'Update success!',
      });
    },3000);
  }

  return (
    <Button onClick={updateMessage}>
      Update message
    </Button>
  );
};`;

export const update = {
  code,
  namespace: Update,
};
