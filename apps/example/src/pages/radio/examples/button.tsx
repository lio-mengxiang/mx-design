import { Button } from '../locale';

const code = `
import { Radio } from '@mx-design/web';

function App() {
  const RadioGroup = Radio.Group;
  return (
    <div>
      <RadioGroup
        type='button'
        name='lang'
        defaultValue='Shanghai'
      >
        <Radio value='Beijing' disabled>Beijing</Radio>
        <Radio value='Shanghai'>Shanghai</Radio>
        <Radio disabled value='Guangzhou'>
          Guangzhou
        </Radio>
        <Radio value='Shenzhen'>Shenzhen</Radio>
      </RadioGroup>
    </div>
  );
}`;

export const button = {
  code,
  namespace: Button,
};
