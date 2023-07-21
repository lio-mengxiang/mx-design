import { Dense } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: '#f5f2f0', padding: '4px 0' };
  return (
    <GridLayout flow="row dense" columns={4}>
      <Cell width={2} height={1} style={cellStyle} middle>
        A 200x100
      </Cell>
      <Cell width={1} height={2} style={cellStyle} middle>
        B 100x200
      </Cell>
      <Cell width={2} height={1} style={cellStyle} middle>
        C 200x100
      </Cell>
      <Cell style={cellStyle} middle>
        D 100x100
      </Cell>
      <Cell style={cellStyle} middle>
        E 100x100
      </Cell>
    </GridLayout>
  )
}`;

export const dense = {
  code,
  namespace: Dense,
};
