import { Long } from '../locale';

const code = `
import { Button } from '@mx-design/web';

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', width: '400px' }}>
      <Button type="brand" long>
        I'm a pig
      </Button>
      <Button type="outline" long>
        I'm a cat
      </Button>
      <Button type="text" long>
        I'm a dog
      </Button>
    </div>
  );
}`;

export const long = {
  code,
  namespace: Long,
};
