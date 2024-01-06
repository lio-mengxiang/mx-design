import { Limit } from '../locale';

const code = `
import { Input } from '@mx-design/web';

function App() {
  return (
    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">
        <Input
          maxLength={{ length: 10 }}
          showWordLimit
          placeholder='Please enter no more than 10 letters'
          style={{ width: 300 }}
        />
        <Input
          maxLength={{ length: 10, errorOnly: true }}
          showWordLimit
          defaultValue='More than 10 letters will be error'
          style={{ width: 300 }}
        />
    </GridLayout>
  );
}`;

export const limit = {
  code,
  namespace: Limit,
};
