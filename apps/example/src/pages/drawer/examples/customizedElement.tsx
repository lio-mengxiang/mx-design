import { CustomizedElement } from '../locale';

const code = `
import { useDrawer, Space, Button, Checkbox } from '@mx-design/web';

function App() {
  const Drawer = useDrawer();
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
          const drawerId = Drawer.add({
            title: hasHeader ? 'Drawer Title' : null,
            footer: hasFooter ? <Button>Ok</Button> : null,
            showCloseIcon: hasClose,
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
    </Space>
  );
}`;

export const customizedElement = {
  code,
  namespace: CustomizedElement,
};
