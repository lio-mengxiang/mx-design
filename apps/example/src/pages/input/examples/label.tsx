import { Label } from '../locale';

const code = `
import { GridLayout, Input } from '@mx-design/web';

function App() {
  return (
    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">
        <Input addAfter='RMB' placeholder='Please enter' />
        <Input addBefore='+86' placeholder='Please enter' />
        <Input addBefore='www.' addAfter='.com' placeholder='Please enter' />
    </GridLayout>
  );
}`;

export const label = {
  code,
  namespace: Label,
};
