import { Update } from '../locale';

const code = `
import { ModalStore, Button, IconLoading } from '@mx-design/web';

function App() {
  const sleep = async (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  async function updateModal() {
    const modalId = ModalStore.add({
      title: 'Modal Title',
      content: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          This modal will close after 1.5s. <IconLoading spin style={{ color: 'var(--brand-color)' }} />
        </div>
      ),
      visible: true,
      closable: false,
      footer: null,
    });
    await sleep(1500);
    ModalStore.update(modalId, {
      type: 'success',
      content: 'Update success!',
    });
    await sleep(500);
    ModalStore.remove(modalId);
  }

  return <Button onClick={updateModal}>Update message</Button>;
}`;

export const update = {
  code,
  namespace: Update,
};
