import { RenderTag } from '../locale';

const code = `
import { GridLayout, InputTag } from '@mx-design/web';

const options = ['error', 'brand', 'success'];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  return (
    <Tag status={options.indexOf(value) > -1 ? value : 'default'} closable={closable} onClose={onClose} style={{ margin: '2px 6px 2px 0' }}>
      {label}
    </Tag>
  );
}

function App() {
  return <InputTag allowClear placeholder="Please input" defaultValue={options} renderTag={tagRender} style={{ maxWidth: 350 }} />;
}
`;

export const renderTag = {
  code,
  namespace: RenderTag,
};
