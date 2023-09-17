import { MaxWidth } from '../locale';

const code = `
import { Tag, Tooltip } from '@mx-design/web';

function App() {
  return (
    <Tooltip content="This is a long long long text label">
      <Tag maxWidth={150}>This is a long long long text label</Tag>
    </Tooltip>
  );
}`;

export const maxWidth = {
  code,
  namespace: MaxWidth,
};
