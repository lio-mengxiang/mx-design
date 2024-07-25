import { MultiLayer } from '../locale';

const code = `
import { DrawerStore, Button } from '@mx-design/web';

function App() {
  return (
    <Button
      onClick={() => {
        const drawerId = DrawerStore.add({
          title: 'Drawer Title',
          width: 600,
          content: (
            <Button
              onClick={() => {
                const drawerId = DrawerStore.add({
                  title: 'Drawer Title',
                  content: (
                    <>
                      <div>Here is an example text.</div>
                      <div>Here is an example text.</div>
                    </>
                  ),
                  onCancel: () => DrawerStore.remove(drawerId),
                });
              }}
            >
              Open Drawer
            </Button>
          ),
          onCancel: () => DrawerStore.remove(drawerId),
        });
      }}
    >
      Open Drawer
    </Button>
  );
}`;

export const multiLayer = {
  code,
  namespace: MultiLayer,
};
