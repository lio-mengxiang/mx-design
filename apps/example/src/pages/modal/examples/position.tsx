import { Position } from '../locale';

const code = `
import { ModalStore, Space, Button } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Button
        onClick={() => {
          const modalId = ModalStore.add({
            title: 'Modal Title',
            content: (
              <div>
                Display a modal dialog at 50px to top
              </div>
            ),
            visible: true,
            themeStyle: { '--modal-top': '50px' },
            onCancel: () => ModalStore.remove(modalId),
          });
        }}
      >
        Display a modal dialog at 50px to top
      </Button>
      <Button
        onClick={() => {
          const modalId = ModalStore.add({
            title: 'Modal Title',
            content: (
              <div>
                Vertically centered modal dialog
              </div>
            ),
            visible: true,
            themeStyle: { '--modal-top': 'calc(50% - 104px)' },
            onCancel: () => ModalStore.remove(modalId),
          });
        }}
      >
        Vertically centered modal dialog
      </Button>
    </Space>
  );
}`;

export const position = {
  code,
  namespace: Position,
};
