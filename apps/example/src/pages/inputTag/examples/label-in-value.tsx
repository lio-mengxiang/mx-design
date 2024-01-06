import { LabelInValue } from '../locale';

const code = `
import { InputTag } from '@mx-design/web';

function App() {
  return (
    <InputTag
      allowClear
      labelInValue
      defaultValue={[
        {
          label: 'a',
          value: '1',
        },
      ]}
      placeholder="Please input"
      style={{ maxWidth: 350 }}
      onChange={(v) => {
        console.log(v);
      }}
    />
  );
}`;

export const labelInValue = {
  code,
  namespace: LabelInValue,
};
