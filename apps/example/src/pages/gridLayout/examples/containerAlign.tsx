import { ContainerAlign } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: "var(--bg-color-component)", padding: '4px 12px' };
  const cellTitleStyle = { border: "1px solid var(--bg-color-component)", padding: '4px 12px' };
  return (
      <GridLayout rows={3}>
        <GridLayout gap="8px" rows="29px 1fr" style={cellTitleStyle}>
        <Cell>Justify Start</Cell>
        <GridLayout columns="50px 50px 50px" justifyContent="start">
          <Cell style={cellStyle} middle>
            A
          </Cell>
          <Cell style={cellStyle} middle>
            B
          </Cell>
          <Cell style={cellStyle} middle>
            C
          </Cell>
        </GridLayout>
        </GridLayout>
        <GridLayout gap="8px" rows="29px 1fr" style={cellTitleStyle}>
        <Cell>Justify End</Cell>
        <GridLayout columns="50px 50px 50px" justifyContent="end">
          <Cell style={cellStyle} middle>
            A
          </Cell>
          <Cell style={cellStyle} middle>
            B
          </Cell>
          <Cell style={cellStyle} middle>
            C
          </Cell>
        </GridLayout>
        </GridLayout>
        <GridLayout gap="8px" rows="29px 1fr" style={cellTitleStyle}>
        <Cell>Justify Space-between</Cell>
        <GridLayout columns="50px 50px 50px" justifyContent="space-between">
          <Cell style={cellStyle} middle>
            A
          </Cell>
          <Cell style={cellStyle} middle>
            B
          </Cell>
          <Cell style={cellStyle} middle>
            C
          </Cell>
        </GridLayout>
        </GridLayout>
      </GridLayout>
  );
}`;

export const containerAlign = {
  code,
  namespace: ContainerAlign,
};
