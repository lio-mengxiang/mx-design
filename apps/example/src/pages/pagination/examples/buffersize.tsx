import { BufferSize } from '../locale';

const code = `
import { Pagination, Space } from '@mx-design/web';

function App(){
  return (
    <div>
      <Space direction='vertical' size="24px">
        <Pagination sizeCanChange total={200} bufferSize={0} defaultCurrent={10} />
        <Pagination sizeCanChange total={200} bufferSize={1} defaultCurrent={10} />
        <Pagination sizeCanChange total={200} bufferSize={2} defaultCurrent={10} />
      </Space>
    </div>
  );
};`;

export const buffersize = {
  code,
  namespace: BufferSize,
};
