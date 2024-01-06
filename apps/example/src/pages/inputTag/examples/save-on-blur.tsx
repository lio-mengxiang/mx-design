import { SaveOnBlur } from '../locale';

const code = `
import { InputTag } from '@mx-design/web';

function App() {
  return <InputTag saveOnBlur placeholder="Input and blur directly" style={{ maxWidth: 350 }} />;
}`;

export const saveOnBlur = {
  code,
  namespace: SaveOnBlur,
};
