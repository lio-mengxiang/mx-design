import { Position } from '../locale';

const code = `
import { DrawerStore, Space, Button, Radio } from '@mx-design/web';

function App() {
  const [placement, setPlacement] = React.useState('right');
  return (
    <Space direction="vertical">
      <Radio.Group name="placement" defaultValue={placement} onChange={setPlacement}>
        <Radio value="top">Top</Radio>
        <Radio value="bottom">Bottom</Radio>
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
      </Radio.Group>
      <Button
        onClick={() => {
          const drawerId = DrawerStore.add({
            title: 'Drawer Title',
            placement,
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
    </Space>
  );
}`;

export const position = {
  code,
  namespace: Position,
};
