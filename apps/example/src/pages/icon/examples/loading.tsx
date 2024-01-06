import { Loading } from '../locale';

const code = `
import { Loading, IconLoading, Space } from '@mx-design/web';

function App() {
  return (
    <Space>
      <Loading size="24px" spin style={{ color: 'var(--brand-color)' }} />
      <IconLoading size="24px" spin style={{ color: 'var(--brand-color)' }} />
    </Space>
  )
}`;

export const loading = {
  code,
  namespace: Loading,
};
