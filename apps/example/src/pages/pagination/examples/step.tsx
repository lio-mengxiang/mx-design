import { Step } from '../locale';

const code = `
import { Pagination } from '@mx-design/web';

function App(){
  function itemRender(page, type, originElement) {
  if (type === 'prev') {
    return <a style={{ fontSize: 14, margin: '0 8px' }}>Prev</a>;
  }

  if (type === 'next') {
    return <a style={{ fontSize: 14, margin: '0 8px' }}>Next</a>;
  }

  return originElement;
}

  return <Pagination itemRender={itemRender} total={200} />;
};`;

export const step = {
  code,
  namespace: Step,
};
