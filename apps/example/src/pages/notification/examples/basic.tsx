import { Basic } from '../locale';

const code = `
import { NotificationStore, Button } from '@mx-design/web';

function App() {
  return (
    <Button
      onClick={() => {
        NotificationStore.add({
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
