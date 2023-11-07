import { PageJumper } from '../locale';

const code = `
import { Pagination } from '@mx-design/web';

function App(){
  return <Pagination total={200} showJumper />;
}`;

export const pageJumper = {
  code,
  namespace: PageJumper,
};
