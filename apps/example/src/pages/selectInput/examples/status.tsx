import { Status } from '../locale';

const code = `
import { GridLayout, SelectInput } from '@mx-design/web';

const OPTIONS = [
  { label: 'China', value: 1 },
  { label: 'United Kingdom', value: 2 },
  { label: 'United States', value: 3 },
  { label: 'France', value: 4 },
  { label: 'Germany', value: 5 },
  { label: 'Japan', value: 6 },
];

const classStyles = \`
<style>
.select-input-basic-container {
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 2px;
}
.select-input-basic-container > li {
  display: block;
  border-radius: 3px;
  line-height: 28px;
  font-size: 14px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select-input-basic-container> li:hover {
  background-color: var(--bg-color-container-hover);
}
</style>
\`;

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
};

function App() {
  const [selectValue, setSelectValue] = React.useState(OPTIONS[0]);
  const [popupVisible, setPopupVisible] = React.useState(false);

  const onOptionClick = (item) => {
    setSelectValue(item);
    setPopupVisible(false);
  };

  const onClear = () => {
    setSelectValue('');
  };

  const onPopupVisibleChange = (val, context) => {
    setPopupVisible(val);
  };

  React.useEffect(() => {
    document.head.insertAdjacentHTML('beforeend', classStyles);
  }, []);

  return (
    <GridLayout columns={2} gap={24}>
      <Space lastOneStyle={{ flex: 1 }}><span>disabled: </span><Demo disabled={true} /></Space>
      <Space lastOneStyle={{ flex: 1 }}><span>readOnly: </span><Demo readOnly={true} /></Space>
      <Space lastOneStyle={{ flex: 1 }}><span>error: </span><Demo status="error" /></Space>
      <Space lastOneStyle={{ flex: 1 }}><span>warning: </span><Demo status="warning" /></Space> 
    </GridLayout>
  );
}
function Demo(props) {
  const [selectValue, setSelectValue] = React.useState(OPTIONS[0].label);
  const [popupVisible, setPopupVisible] = React.useState(false);

  const onOptionClick = (item) => {
    setSelectValue(item);
    setPopupVisible(false);
  };

  const onClear = () => {
    setSelectValue('');
  };

  const onPopupVisibleChange = (val, context) => {
    setPopupVisible(val);
  };

  React.useEffect(() => {
    document.head.insertAdjacentHTML('beforeend', classStyles);
  }, []);

  return (
    <SelectInput
      value={selectValue}
      popupVisible={popupVisible}
      inputProps={{
        placeholder: 'Please Select',
        allowClear: true,
        onClear,
        readOnly: props.readOnly
        ...props,
      }}
      onPopupVisibleChange={onPopupVisibleChange}
      panel={
        <div className="select-input-basic-container">
          {OPTIONS.map((item) => (
            <li key={item.value} onClick={() => onOptionClick(item.label)}>
              {item.label}
            </li>
          ))}
        </div>
      }
    />
  );
}`;

export const status = {
  code,
  namespace: Status,
};
