import { Controlled } from '../locale';

const code = `
import { Radio, Button, Space } from '@mx-design/web';

function App() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <Space size={40}>
        <Radio
          checked={checked}
        >
          Checkbox
        </Radio>
        <Radio checked={checked} disabled>
          disabled Checkbox
        </Radio>
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
