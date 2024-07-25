import { Async } from '../locale';

const code = `
import { ModalStore, Button, MessageStore } from '@mx-design/web';

function App() {
  return (
    <Button
      onClick={() => {
        const modalId = ModalStore.add({
          title: 'Modal Title',
          content: <div>Form xxx</div>,
          visible: true,
          onCancel: () => ModalStore.remove(modalId),
          okLoading: false,
          onOk: () => {
            ModalStore.update(modalId, { okLoading: true });
            new Promise((res) => {
              setTimeout(() => {
                res('complete');
              }, 2000);
            }).then((data) => {
              MessageStore.add({
                type: 'success',
                content: data,
              });
              ModalStore.remove(modalId);
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
