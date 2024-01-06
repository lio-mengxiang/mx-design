import { IconFont } from '../locale';

const code = `
import { createFromIconfont } from '@mx-design/web';

function App() {
  // pass url
  const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_3337530_4kpk3x87pyc.js')
  return <IconFont type="icon-checked" size="2em" />;
}`;

export const iconFont = {
  code,
  namespace: IconFont,
};
