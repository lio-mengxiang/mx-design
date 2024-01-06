import { Simple } from '../locale';

const code = `
import { Pagination } from '@mx-design/web';

function App() {
  return <Pagination total={90} simple />;
};`;

export const simple = {
  code,
  namespace: Simple,
};
