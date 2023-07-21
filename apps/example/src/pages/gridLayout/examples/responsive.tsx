import { Basic } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: '#f5f2f0', padding: '4px 0' };
  return (
    <GridLayout columns="repeat(auto-fit,minmax(120px,1fr))">
      <Cell>
        A
      </Cell>
      <Cell>
        B
      </Cell>
      <Cell>
        C
      </Cell>
      <Cell>
        D
      </Cell>
      <Cell>
        E
      </Cell>
      <Cell>
        F
      </Cell>
    </GridLayout>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
