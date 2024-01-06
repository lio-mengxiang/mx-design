import { Basic } from '../locale';

const code = `
import { useNotification, Button } from '@mx-design/web';

function App() {
  const Notification = useNotification();
  return (
    <Button
      onClick={() => {
        Notification.add({
          type: 'info',
          title: 'Title',
          content: 'This is an notification!'
        });
      }}
    >
      Open Notification
    </Button>
  );
};`;

export const basic = {
  code,
  namespace: Basic,
};
