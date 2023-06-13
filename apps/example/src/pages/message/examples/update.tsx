import { Update } from '../locale';

const code = `
import { useMessage, Button } from '@mx-design/web';

function App() {
  const Message = useMessage();

  function updateMessage() {
    const id = Message.add({
      type: 'loading',
      content: 'Will update after 1 seconds...',
    });
    setTimeout(() => {
      Message.update(id, {
        type: 'success',
        content: 'Update success!',
      });
    },1000);
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
