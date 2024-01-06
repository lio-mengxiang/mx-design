import { Basic } from '../locale';

const code = `
import { useDrawer, Button } from '@mx-design/web';

function App() {
  const Drawer = useDrawer();
  return (
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
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
