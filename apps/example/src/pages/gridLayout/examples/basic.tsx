import { Basic } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: "var(--bg-color-component)", padding: '4px 0' };
  return (
      <GridLayout columns={6}>
        <Cell style={cellStyle} width={1} middle>1/6</Cell>
        <Cell style={cellStyle} width={1} middle>1/6</Cell>
        <Cell style={cellStyle} width={1} middle>1/6</Cell>
        <Cell style={cellStyle} width={1} middle>1/6</Cell>
        <Cell style={cellStyle} width={1} middle>1/6</Cell>
        <Cell style={cellStyle} width={1} middle>1/6</Cell>
        <Cell style={cellStyle} width={2} middle>2/6</Cell>
        <Cell style={cellStyle} width={2} middle>2/6</Cell>
        <Cell style={cellStyle} width={2} middle>2/6</Cell>
        <Cell style={cellStyle} width={3} middle>1/3</Cell>
        <Cell style={cellStyle} width={3} middle>1/3</Cell>
        <Cell style={cellStyle} width={6} middle>1/1</Cell>
      </GridLayout>
  )
}`;

export const basic = {
  code,
  namespace: Basic,
};
