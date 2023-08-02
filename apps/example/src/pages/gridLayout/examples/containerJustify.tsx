import { ContainerJustify } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: "var(--bg-color-component)", padding: '4px 12px' };
  const cellTitleStyle = { border: "1px solid var(--bg-color-component)", padding: '4px 12px' };
  return (
      <GridLayout columns={3}>
        <GridLayout gap="8px" rows="29px 200px" style={cellTitleStyle}>
          <Cell>Align Start</Cell>
          <GridLayout flow="column" rows="30px 30px 30px" alignContent="start">
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
        <GridLayout gap="8px" rows="29px 200px" style={cellTitleStyle}>
          <Cell>Align End</Cell>
          <GridLayout flow="column" rows="30px 30px 30px" alignContent="end">
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
        <GridLayout gap="8px" rows="29px 200px" style={cellTitleStyle}>
          <Cell>Align Space-between</Cell>
          <GridLayout flow="column" rows="30px 30px 30px" alignContent="space-between">
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

export const containerJustify = {
  code,
  namespace: ContainerJustify,
};
