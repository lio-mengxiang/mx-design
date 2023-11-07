import { Total } from '../locale';

const code = `
import { Pagination } from '@mx-design/web';

function App() {
  return <Pagination total={90} showTotal />;
};`;

export const total = {
  code,
  namespace: Total,
};
