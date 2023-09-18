import { Normalize } from '../locale';

const code = `
import { Input } from '@mx-design/web';

function App() {
  return (
    <Space>
      <div>
        <>trim whitespace when out of focus：</>
        <Input
          onChange={(v) => {
            console.log('current value: ', v);
          }}
          normalizeTrigger={['onBlur']}
          normalize={(v) => (v ? v.trim() : v)}
          style={{ width: 350 }}
        />
      </div>
      <div>
        <>trim whitespace when press enter：</>
        <Input
          onChange={(v) => {
            console.log('current value: ', v);
          }}
          normalize={(v) => (v ? v.trim() : v)}
          normalizeTrigger={['onPressEnter']}
          style={{ width: 350 }}
        />
      </div>
    </Space>
  );
}`;

export const normalize = {
  code,
  namespace: Normalize,
};
