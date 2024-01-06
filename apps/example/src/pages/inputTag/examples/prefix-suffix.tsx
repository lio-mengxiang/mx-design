import { PrefixSuffix } from '../locale';

const code = `
import { Space, InputTag, IconFabulous } from '@mx-design/web';

function App() {
  return (
    <div>
      <Space style={{ marginBottom: 20 }}>
        <InputTag prefix="¥" style={{ width: 350 }} allowClear />
        <InputTag addBefore={<IconFabulous />} style={{ width: 350 }} allowClear />
      </Space>
      <Space style={{ marginBottom: 20 }}>
        <InputTag prefix="¥" addBefore={<IconFabulous />} style={{ width: 350 }} allowClear />
        <InputTag addBefore="www." addAfter=".com" style={{ width: 350 }} allowClear />
      </Space>
    </div>
  );
}`;

export const prefixSuffix = {
  code,
  namespace: PrefixSuffix,
};
