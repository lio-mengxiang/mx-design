import { Update } from '../locale';

const code = `
import { useNotification, Button } from '@mx-design/web';

function App() {
  const Notification = useNotification();

  function updateMessage() {
    const id = Notification.add({
      title: 'Title',
      type: 'loading',
      content: 'Will update after 1 seconds...',
    });
    setTimeout(() => {
      Notification.update(id, {
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
