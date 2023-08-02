import { HolyGrail } from '../locale';

const code = `
import { GridLayout, Cell, Button } from '@mx-design/web';

function App() {
  const cellStyle = { background: "var(--bg-color-component)", padding: '4px 0' };
  const cellStyleContent = { ...cellStyle, height: '200px' };
  return (
    <GridLayout columns="100px 1fr 100px" rows="minmax(45px,auto) 1fr minmax(45px,auto)">
      <Cell width={3} style={cellStyle} middle>
        <h3>Header</h3>
      </Cell>
      <Cell style={cellStyleContent} middle>
        Menu
      </Cell>
      <Cell style={cellStyleContent} middle>
        Content
      </Cell>
      <Cell style={cellStyleContent} middle>
        Ads
      </Cell>
      <Cell width={3} style={cellStyle} middle>
        footer
      </Cell>
    </GridLayout>
  );
}`;

export const holyGrail = {
  code,
  namespace: HolyGrail,
};
