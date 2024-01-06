import { Basic } from '../locale';

const code = `
import { Space, InputTag } from '@mx-design/web';

function App() {
  return (
    <div>
      <Space style={{ marginBottom: 20 }}>
        <InputTag allowClear placeholder="Input and press Enter" style={{ width: 350 }} />
        <InputTag
          allowClear
          placeholder="Disabled"
          disabled
          style={{ width: 350 }}
          defaultValue={[
            {
              label: '标签3',
              value: '1',
            },
          ]}
        />
      </Space>
      <Space style={{ marginBottom: 20 }}>
        <InputTag
          allowClear
          placeholder="Readonly"
          readOnly
          style={{ width: 350 }}
          defaultValue={[
            {
              label: '标签3',
              value: '1',
            },
          ]}
        />
        <InputTag allowClear placeholder="Error" status="error" style={{ width: 350 }} />
      </Space>
      <InputTag allowClear placeholder="Warning" status="warning" style={{ width: 350 }} />
    </div>
  );
}`;

export const basic = {
  code,
  namespace: Basic,
};
