import { Size } from '../locale';

const code = `
function App() {
  const RadioGroup = Radio.Group;

  const sizeMap = {
    large: {
      '--pagination-size-font-size': '14px',
      '--pagination-size': '36px',
       '--input-padding': '8px 12px'
    },
    default: {
      '--pagination-size-font-size': '14px',
      '--pagination-size': '32px',
      '--input-padding': '6px 10px'
    },
    mini: {
      '--pagination-size-font-size': '14px',
      '--pagination-size': '28px',
      '--input-padding': '4px 12px'
    },
  };

  const [size, setSize] = React.useState('default');
  return (
    <div>
      <RadioGroup
        value={size}
        options={['large', 'default', 'mini']}
        onChange={(value) => setSize(value)}
        type='button'
        style={{
          marginBottom: 20,
        }}
      />
      <Pagination size={size} total={50} showTotal showJumper themeStyle={sizeMap[size]} />
    </div>
  );
}`;

export const size = {
  code,
  namespace: Size,
};
