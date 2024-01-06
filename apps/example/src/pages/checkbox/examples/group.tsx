import { Group } from '../locale';

const code = `
import { Checkbox } from '@mx-design/web';

function App() {
  const CheckboxGroup = Checkbox.Group;
  const options = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
      disabled: true,
    },
    {
      label: 'Option 3',
      value: '3',
    },
    {
      label: 'Option 4',
      value: '4',
    },
  ];

  return (
    <div>
      <CheckboxGroup
        options={options}
        onChange={(value)=> console.log(value)}
      />
    </div>
  );
};`;

export const group = {
  code,
  namespace: Group,
};
