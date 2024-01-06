import { Controlled } from '../locale';

const code = `
import { Checkbox, Button, Space } from '@mx-design/web';

function App() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <Space size={40}>
        <Checkbox
          checked={checked}
        >
          Checkbox
        </Checkbox>
        <Checkbox checked={checked} disabled>
          disabled Checkbox
        </Checkbox>
      </Space>
      <div style={{ marginTop: 30 }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? 'unCheck' : 'Check'}
        </Button>
      </div>
    </div>
  );
}`;

export const controlled = {
  code,
  namespace: Controlled,
};
