import { All } from '../locale';

const code = `
import { Checkbox } from '@mx-design/web';

function App() {
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);
  const [value, setValue] = React.useState([0, 1]);

  const CheckboxGroup = Checkbox.Group;
  const options = ['Option 1', 'Option 2', 'Option 3'];

  function onChangeAll(checked) {
    if (checked) {
      setIndeterminate(false);
      setCheckAll(true);
      setValue([0, 1, 2]);
    } else {
      setIndeterminate(false);
      setCheckAll(false);
      setValue([]);
    }
  }

  function onChange(checkList) {
    setIndeterminate(!!(checkList.length && checkList.length !== options.length));
    setCheckAll(!!(checkList.length === options.length));
    setValue(checkList);
  }

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Checkbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate}>
          {checkAll ? 'unCheck All' : 'Check All'}
        </Checkbox>
      </div>
      <CheckboxGroup
        value={value}
        options={options.map((x, i) => ({
          label: x,
          value: i,
        }))}
        onChange={onChange}
      />
    </div>
  );
}`;

export const all = {
  code,
  namespace: All,
};
