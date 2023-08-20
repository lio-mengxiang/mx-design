import { Update } from '../locale';

const code = `
import { Modal, Button, IconLoading } from '@mx-design/web';

function App() {
  const Modal = useModal();
  const sleep = async (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  async function updateModal() {
    const modalId = Modal.add({
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
    Modal.update(modalId, {
      type: 'success',
      content: 'Update success!',
    });
    await sleep(500);
    Modal.remove(modalId);
  }

  return <Button onClick={updateModal}>Update message</Button>;
}`;

export const update = {
  code,
  namespace: Update,
};
