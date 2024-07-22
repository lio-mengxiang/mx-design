import { Async } from '../locale';

const code = `
import { useModal, Button, MessageStore } from '@mx-design/web';

function App() {
  const Modal = useModal();
  return (
    <Button
      onClick={() => {
        const modalId = Modal.add({
          title: 'Modal Title',
          content: <div>Form xxx</div>,
          visible: true,
          onCancel: () => Modal.remove(modalId),
          okLoading: false,
          onOk: () => {
            Modal.update(modalId, { okLoading: true });
            new Promise((res) => {
              setTimeout(() => {
                res('complete');
              }, 2000);
            }).then((data) => {
              MessageStore.add({
                type: 'success',
                content: data,
              });
              Modal.remove(modalId);
            });
          },
        });
      }}
    >
      Open Modal with async logic
    </Button>
  );
}`;

export const async = {
  code,
  namespace: Async,
};
