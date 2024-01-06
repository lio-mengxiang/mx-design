import { Status } from '../locale';

const code = `
import { GridLayout, Input } from '@mx-design/web';

function App() {
  return (
    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">
      <Input status="error" placeholder="error status" />
      <Input status="warning" placeholder="warning status" />
      <Input disabled placeholder="disabled input" />
    </GridLayout>
  );
}`;

export const status = {
  code,
  namespace: Status,
};
