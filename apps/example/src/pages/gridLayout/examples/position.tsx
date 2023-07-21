import { Position } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: '#f5f2f0', padding: '4px 0' };
  return (
    <GridLayout columns={3}>
      <Cell style={cellStyle} middle>Top Left</Cell>
      <Cell left={3} style={cellStyle} middle>Top Right</Cell>
      <Cell left={2} top={2} style={cellStyle} middle>Middle</Cell>
      <Cell top={3} style={cellStyle} middle>Bottom Left</Cell>
      <Cell top={3} left={3} style={cellStyle} middle>Bottom Right</Cell>
    </GridLayout>
  )
}`;

export const position = {
  code,
  namespace: Position,
};
