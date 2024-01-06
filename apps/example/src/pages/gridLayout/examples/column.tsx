import { Column } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: "var(--bg-color-component)", padding: '4px 0' };
  return (
      <GridLayout flow="column" columns={4}>
        <Cell style={cellStyle} height={1} middle>1/6</Cell>
        <Cell style={cellStyle} height={1} middle>1/6</Cell>
        <Cell style={cellStyle} height={1} middle>1/6</Cell>
        <Cell style={cellStyle} height={1} middle>1/6</Cell>
        <Cell style={cellStyle} height={1} middle>1/6</Cell>
        <Cell style={cellStyle} height={1} middle>1/6</Cell>
        <Cell style={cellStyle} height={2} middle>2/6</Cell>
        <Cell style={cellStyle} height={2} middle>2/6</Cell>
        <Cell style={cellStyle} height={2} middle>2/6</Cell>
        <Cell style={cellStyle} height={3} middle>1/3</Cell>
        <Cell style={cellStyle} height={3} middle>1/3</Cell>
        <Cell style={cellStyle} height={6} middle>1/1</Cell>
      </GridLayout>
  )
}`;

export const column = {
  code,
  namespace: Column,
};
