import { MultiLayer } from '../locale';

const code = `
import { useDrawer, Button } from '@mx-design/web';

function App() {
  const Drawer = useDrawer();
  return (
    <Button
      onClick={() => {
        const drawerId = Drawer.add({
          title: 'Drawer Title',
          width: 600,
          content: (
            <Button
              onClick={() => {
                const drawerId = Drawer.add({
                  title: 'Drawer Title',
                  content: (
                    <>
                      <div>Here is an example text.</div>
                      <div>Here is an example text.</div>
                    </>
                  ),
                  visible: true,
                  onCancel: () => Drawer.remove(drawerId),
                });
              }}
            >
              Open Drawer
            </Button>
          ),
          visible: true,
          onCancel: () => Drawer.remove(drawerId),
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
