import { Mount } from '../locale';

const code = `
import { DrawerStore, Button } from '@mx-design/web';

function App() {
  const refWrapper = React.useRef(null);
  const wrapperStyle = {
    width: '100%',
    height: 300,
    backgroundColor: 'var(--bg-color-page)',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
  };
  return (
    <div ref={refWrapper} style={wrapperStyle}>
      <Button
        style={{ marginTop: 120 }}
        onClick={() => {
          const drawerId = DrawerStore.add({
            title: 'Drawer Title',
            width: 200,
            getMountContainer: () => refWrapper && refWrapper.current,
            content: <div style={{ textAlign: 'left' }}>Here is an example text.</div>,
            onCancel: () => DrawerStore.remove(drawerId),
          });
        }}
      >
        Open Drawer
      </Button>
    </div>
  );
}`;

export const mount = {
  code,
  namespace: Mount,
};
