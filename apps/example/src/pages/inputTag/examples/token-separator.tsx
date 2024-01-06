import { TokenSeparator } from '../locale';

const code = `
import { GridLayout, InputTag } from '@mx-design/web';

function App() {
  return (
    <div>
      <p>China,USA|UK</p>
      <InputTag allowClear tokenSeparators={[',', '|']} placeholder="Paste text here" style={{ width: 350 }} />
    </div>
  );
}
`;

export const tokenSeparator = {
  code,
  namespace: TokenSeparator,
};
