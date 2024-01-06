import { Search } from '../locale';

const code = `
import { Input } from '@mx-design/web';

function App() {
  return (
    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">
      <Input.Search allowClear placeholder="Please Enter something" />
      <Input.Search loading allowClear placeholder="Please Enter something" />
      <Input.Search searchButton allowClear placeholder="Please Enter something" />
      <Input.Search searchButton="Search" allowClear placeholder="Please Enter something" />
      <Input.Search loading searchButton="Search" allowClear placeholder="Please Enter something" />
    </GridLayout>
  );
}`;

export const search = {
  code,
  namespace: Search,
};
