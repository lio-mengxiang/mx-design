import { Suffix } from '../locale';

const code = `
import { GridLayout, Input } from '@mx-design/web';

function App() {
  return (
    <GridLayout columns="repeat(2, 350px)" rows={2} gap="24px">
      <Input prefix={<IconSearch />} placeholder="Please enter" />
      <Input allowClear suffix={<IconSearch />} placeholder="Please enter" />
      <Input prefix={<IconSearch />} suffix={<IconPrompt />} placeholder="Please enter" />
      <Input
        addBefore="+86"
        addAfter={<IconLink />}
        prefix={<IconSearch />}
        suffix={<IconPrompt />}
        allowClear
        placeholder="Please enter"
      />
    </GridLayout>
  );
}`;

export const suffix = {
  code,
  namespace: Suffix,
};
