import { Update } from '../locale';

const code = `
import { Button } from '@mx-design/web';

function App() {
  function updateMessage() {
    const id = NotificationStore.add({
      title: 'Title',
      type: 'loading',
      content: 'Will update after 1 seconds...',
    });
    setTimeout(() => {
      NotificationStore.update(id, {
        title: 'Title',
        type: 'success',
        content: 'Update success!',
      });
    },1000);
  }

  return (
    <Button onClick={updateMessage}>
      Update notification
    </Button>
  );
};`;

export const update = {
  code,
  namespace: Update,
};
