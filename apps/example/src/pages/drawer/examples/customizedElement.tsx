import { CustomizedElement } from '../locale';

const code = `
import { DrawerStore, Space, Button, Checkbox } from '@mx-design/web';

function App() {
  const [hasHeader, setHeader] = React.useState(true);
  const [hasFooter, setFooter] = React.useState(true);
  const [hasClose, setClose] = React.useState(true);
  return (
    <Space direction="vertical">
      <Space>
        <Checkbox
          onChange={(value) => {
            setHeader(!value);
          }}
          style={{ marginRight: 20 }}
        >
          Hide title
        </Checkbox>
        <Checkbox
          onChange={(value) => {
            setFooter(!value);
          }}
          style={{ marginRight: 20 }}
        >
          Hide footer
        </Checkbox>
        <Checkbox
          onChange={(value) => {
            setClose(!value);
          }}
        >
          Hide close icon
        </Checkbox>
      </Space>
      <Button
        onClick={() => {
          const drawerId = DrawerStore.add({
            title: hasHeader ? 'Drawer Title' : null,
            footer: hasFooter ? <Button>Ok</Button> : null,
            showCloseIcon: hasClose,
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

export const customizedElement = {
  code,
  namespace: CustomizedElement,
};
